<template>
  <div id="signin">
    <div class="abs-form">
      <img
        class="abs-form-svg bottom-left animate__animated animate__zoomIn"
        :src="require('../assets/images/undraw_Hello_qnas.svg')"
      />
      <img
        class="
          abs-form-mini-svg
          bottom-right
          animate__animated animate__jackInTheBox
        "
        :src="require('../assets/images/flower-pot1.svg')"
      />

      <div class="form-content">
        <h3 class="form-title">ورود</h3>
        <div>
          <label class="input-label">ایمیل شما</label>
          <input
            v-model="email"
            name="email"
            class="input"
            type="email"
            required
          />
        </div>
        <div>
          <label class="input-label">گذرواژه</label>
          <input
            v-model="password"
            name="password"
            class="input"
            type="password"
            required
          />
        </div>

        <span class="link red">
          {{ this.alert._text }}
        </span>

        <div class="input-checkbox">
          <label class="pt cont"
            >مرا به یاد داشته باش
            <input v-model="remember_me" type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>

        <div style="margin-top: 25px" class="g_recaptcha">
          <VueRecaptcha
            class="g"
            :sitekey="google_recaptcha_sitekey"
            :loadRecaptchaScript="true"
            @verify="recaptchaVerified"
          ></VueRecaptcha>
        </div>

        <div style="margin-top: 15px; margin-bottom: 18px">
          <button
            :disabled="submit_button_loading_sate"
            @click="signin_submit"
            class="dvsp-button button-with-spinner"
          >
            ورود
            <div
              class="button_loading_state"
              v-if="submit_button_loading_sate"
            ></div>
          </button>
        </div>

        <hr class="circle-hr" />

        <nuxt-link to="/forgot_password" class="link"
          >رمز عبورتان را فراموش کرده اید؟</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
import configs from '../assets/js/configs'
import axios from 'axios'

export default {
  data() {
    return {
      google_recaptcha_sitekey: configs.google_recaptcha_sitekey,
      google_recaptcha_token: '',
      alert: {
        _text: '',
      },
      email: '',
      password: '',
      remember_me: true,
      submit_button_loading_sate: false,
    }
  },
  mounted() {
    let saved__user = localStorage.getItem('saved__user')
    if (saved__user != undefined && saved__user != null) {
      saved__user = JSON.parse(saved__user)
      this.$data.email = saved__user.email
      this.$data.password = saved__user.password
    }
  },
  methods: {
    resetRecaptcha() {
      window.grecaptcha.reset()
    },
    recaptchaVerified(recaptchaToken) {
      this.$data.google_recaptcha_token = recaptchaToken
    },
    set_alert_data(text) {
      this.$set(this.$data.alert, '_text', text)
      this.$data.submit_button_loading_sate = false
    },
    signin_submit() {
      this.$data.submit_button_loading_sate = true
      let delay = setInterval(() => {
        if (
          this.$data.google_recaptcha_token != '' &&
          this.$data.google_recaptcha_token != undefined
        ) {
          if (
            String(this.$data.email).trim() != '' &&
            String(this.$data.password).trim() != ''
          ) {
            axios
              .post(configs.api_server_address + '/users/signin', {
                email: this.$data.email,
                password: this.$data.password,
                recaptcha: this.$data.google_recaptcha_token,
              })
              .then((response) => {
                if (response.data != undefined && response.data != null) {
                  if (
                    response.data.code != undefined &&
                    response.data.code != null
                  ) {
                    switch (response.data.code) {
                      case 200:
                        this.$store.commit('setUser', {
                          email: this.$data.email,
                          password: this.$data.password,
                          token: response.data.token,
                          remember_me: this.$data.remember_me,
                        })
                        this.$store.commit('setUserInfo', {
                          userInfo: response.data.user_info,
                        })
                        this.$nuxt.$options.router.push('/')
                        this.set_alert_data('')
                        this.resetRecaptcha()
                      case 401:
                        this.set_alert_data(
                          'ایمیل یا گذرواژه شما صحیح نمی باشد.'
                        )
                        this.resetRecaptcha()
                        break
                      case 503:
                        if (
                          response.data.message != undefined &&
                          response.data.message == 'recaptcha not verified'
                        ) {
                          this.set_alert_data('ریکپچا را تایید کنید.')
                        } else if (
                          response.data.message == 'email not verified'
                        ) {
                          this.set_alert_data('ایمیل شما تایید نشده است!')
                        } else {
                          this.set_alert_data('سرویس در دسترس نیست...')
                        }
                        this.resetRecaptcha()
                        break
                      case 404:
                        this.set_alert_data('کاربری با این ایمیل وجود ندارد.')
                        this.resetRecaptcha()
                        break
                      case 400:
                        this.set_alert_data(
                          'فیلد ها صحیح نمی باشد. یا خطایی در سمت سرور رخ داده است.'
                        )
                        this.resetRecaptcha()
                        break
                    }
                  }
                }
              })
              .catch((error) => {
                this.set_alert_data('خطای در برقراری ارتباط با سرور.')
                this.resetRecaptcha()
              })
          } else {
            this.set_alert_data('فیلد ها ناقص است.')
          }
        } else {
          this.set_alert_data('ریکپچا را تایید کنید.')
          this.resetRecaptcha()
        }
        clearInterval(delay)
      }, 500)
    },
  },
  components: {
    VueRecaptcha,
  },
}
</script>
