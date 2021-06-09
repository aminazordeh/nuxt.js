<template>
  <div id="signin">
    <template v-if="!verify_your_email_page_show">
      <div class="form">
        <img
          class="form-svg animate__animated animate__zoomIn"
          :src="require('../assets/images/undraw_remotely_2j6y.svg')"
        />

        <div class="form-content">
          <h3 class="form-title">ثبت نام</h3>
          <div>
            <label class="input-label">ایمیل شما</label>
            <input v-model="email" class="input" type="email" required />
          </div>
          <div>
            <label class="input-label">نام کامل شما</label>
            <input v-model="full_name" class="input" type="text" required />
          </div>
          <div>
            <label class="input-label">گذرواژه</label>
            <input v-model="password" class="input" type="password" required />
          </div>
          <div>
            <label class="input-label">تکرار گذرواژه</label>
            <input
              v-model="password_repeat"
              class="input"
              type="password"
              required
            />
          </div>

          <span class="link red">
            {{ this.alert._text }}
          </span>

          <div class="input-checkbox">
            <label class="pt cont">
              <span dir="rtl" style="font-weight: bold"
                ><nuxt-link class="link-no-style" to="/terms_and_conditions"
                  >قوانین و مقررات</nuxt-link
                >
                devsparkle را رعایت میکنم</span
              >
              <input v-model="accept_terms_and_conditions" type="checkbox" />
              <span class="checkmark"></span>
            </label>
          </div>

          <div style="margin-top: 25px">
            <VueRecaptcha
              :sitekey="google_recaptcha_sitekey"
              :loadRecaptchaScript="true"
              @verify="recaptchaVerified"
            ></VueRecaptcha>
          </div>

          <div style="margin-top: 15px; margin-bottom: 18px">
            <button @click="signin_submit" class="dvsp-button">ثبت نام</button>
          </div>

          <hr class="circle-hr" />

          <nuxt-link to="/signin" class="link"
            >حساب کاربری دارید؟ وارد شوید!</nuxt-link
          >
        </div>
      </div>
    </template>
    <div
      v-if="verify_your_email_page_show"
      class="w-100"
      style="padding-top: 80px"
    >
      <div class="center-flex" style="flex-direction: column">
        <div class="d-block" style="width: 70px; height: 70px">
          <svg
            style="color: #111"
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Mail</title>
            <rect
              x="48"
              y="96"
              width="416"
              height="320"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M112 160l144 112 144-112"
            />
          </svg>
        </div>
        <span
          style="color: #666; font-weight: 600"
          class="d-block mt-3"
          dir="rtl"
        >
          ثبت نام با موفقیت انجام شد. <br />
          ایمیل حاوی لینک تایید برایتان ارسال شده است. <br />
          (درصورت دریافت نکردن ایمیل حتمی پوشه Spam را بررسی کنید)
        </span>
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
      full_name: '',
      password: '',
      password_repeat: '',
      accept_terms_and_conditions: false,
      verify_your_email_page_show: false,
    }
  },
  methods: {
    recaptchaVerified(recaptchaToken) {
      this.$data.google_recaptcha_token = recaptchaToken
    },
    set_alert_data(text) {
      this.$set(this.$data.alert, '_text', text)
    },
    signin_submit() {
      if (
        this.$data.google_recaptcha_token != '' &&
        this.$data.google_recaptcha_token != undefined
      ) {
        if (
          this.$data.email.trim() != '' &&
          this.$data.email.trim() != undefined &&
          this.$data.full_name.trim() != '' &&
          this.$data.full_name.trim() != undefined &&
          this.$data.password.trim() != '' &&
          this.$data.password.trim() != undefined &&
          this.$data.password_repeat.trim() != '' &&
          this.$data.password_repeat.trim() != undefined
        ) {
          if (
            this.$data.accept_terms_and_conditions != undefined &&
            this.$data.accept_terms_and_conditions == true
          ) {
            if (
              String(this.$data.password).trim() ==
              String(this.$data.password_repeat).trim()
            ) {
              axios
                .post(configs.api_server_address + '/users/signup', {
                  email: this.$data.email,
                  password: this.$data.password,
                  full_name: this.$data.full_name,
                })
                .then((response) => {
                  switch (response.data.code) {
                    case 200:
                      axios
                        .post(
                          configs.api_server_address +
                            '/users/send/email/verification',
                          {
                            email: this.$data.email,
                            token: this.$data.google_recaptcha_token,
                          }
                        )
                        .then((response) => {
                          switch (response.data.code) {
                            case 200:
                              this.$data.verify_your_email_page_show = true
                              break
                            case 404:
                              this.set_alert_data(
                                'خطایی در سمت سرور رخ داده است... ثبت کاربر امکان پذیر نیست... دوباره تلاش کنید.'
                              )
                              this.$data.verify_your_email_page_show = false
                              break
                            case 400:
                              this.set_alert_data(
                                'فیلد ها صحیح نمی باشد. یا خطایی در سمت سرور رخ داده است.'
                              )
                              break
                            case 500:
                              this.set_alert_data(
                                'خطایی در سمت سرور رخ داده است.'
                              )
                              break
                          }
                        })
                        .catch((error) => {
                          this.set_alert_data('خطای در برقراری ارتباط با سرور.')
                        })
                      break
                    case 500:
                      this.set_alert_data('خطایی در سمت سرور رخ داده است.')
                      break
                    case 409:
                      this.set_alert_data('کاربر دیگری با این ایمیل وجود دارد.')
                      break
                    case 400:
                      this.set_alert_data(
                        'فیلد ها صحیح نمی باشد. یا خطایی در سمت سرور رخ داده است.'
                      )
                      break
                  }
                })
                .catch((error) => {
                  this.set_alert_data('خطای در برقراری ارتباط با سرور.')
                })
              this.set_alert_data('')
            } else {
              this.set_alert_data('گذرواژه و تکرار گذرواژه مطابقت ندارد.')
            }
          } else {
            this.set_alert_data(
              'برای ثبت نام ابتدا باید قوانین وبسایت را بپذیرید.'
            )
          }
        } else {
          this.set_alert_data('فیلد ها ناقص است.')
        }
      } else {
        this.set_alert_data('ریکپچا را تایید کنید.')
      }
    },
  },
  components: {
    VueRecaptcha,
  },
}
</script>
