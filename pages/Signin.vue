<template>
  <div id="Signin">
    <div class="abs-form">
      <!-- <img
        class="form-svg"
        :src="require('../assets/images/undraw_people_tax5.svg')"
      /> -->
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
          <input v-model="email" class="input" type="email" required />
        </div>
        <div>
          <label class="input-label">گذرواژه</label>
          <input v-model="password" class="input" type="password" required />
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

        <div class="center-flex" style="margin-top: 25px">
          <VueRecaptcha
            sitekey="Your key here"
            :loadRecaptchaScript="true"
          ></VueRecaptcha>
        </div>

        <div style="margin-top: 15px; margin-bottom: 18px">
          <button @click="signin_submit" class="dvsp-button">ورود</button>
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

let vmdata = {
  alert: {
    _text: '',
  },
  email: '',
  password: '',
  remember_me: true,
  recaptcha_value: '',
}

export default {
  data() {
    return vmdata
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
    signin_submit() {
      if (
        String(this.$data.email).trim() != '' &&
        String(this.$data.password).trim() != ''
      ) {
        axios
          .post(configs.api_server_address + '/users/signin', {
            email: this.$data.email,
            password: this.$data.password,
          })
          .then((response) => {
            if (response != undefined && response.data != undefined) {
              if (
                response.data.status != '' &&
                response.data.status != undefined
              ) {
                switch (response.data.status) {
                  case 200:
                    if (
                      response.data.token != '' &&
                      response.data.token != undefined
                    ) {
                      this.$store.commit('setUser', {
                        email: this.$data.email,
                        password: this.$data.password,
                        token: response.data.token,
                        remember_me: this.$data.remember_me,
                      })
                      this.$nuxt.$options.router.push('/dashboard/home')
                      return
                    } else {
                      vmdata.alert._text = 'خطا در احراز هویت!'
                    }
                    break
                  case 404:
                    vmdata.alert._text = 'ایمیل یا گذرواژه صحیح نمی باشد.'
                    break
                  case 401:
                    vmdata.alert._text = 'ایمیل یا گذرواژه صحیح نمی باشد.'
                    break
                  case 400:
                    vmdata.alert._text = 'فیلد ها ناقص است.'
                    break
                }
              } else {
                vmdata.alert._text = 'خطا در ارسال درخواست به سرور.'
              }
            } else {
              vmdata.alert._text = 'خطا در ارسال درخواست به سرور.'
            }
            return
          })
          .catch((error) => {
            try {
              switch (error.response.status) {
                case 404:
                  vmdata.alert._text = 'خطا در ارسال درخواست به سرور.'
                  break
                case 503:
                  vmdata.alert._text = 'سرویس در دسترس نمی باشد.'
                  break
                default:
                  vmdata.alert._text = ''
              }
            } catch (error) {}
            return
          })
      } else {
        return (vmdata.alert._text = 'فیلد ها ناقص است.')
      }
    },
  },
  components: {
    VueRecaptcha,
  },
}
</script>
