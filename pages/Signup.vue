<template>
  <div id="Signin">
    <div class="form">
      <img
        class="form-svg animate__animated animate__zoomIn"
        :src="require('../assets/images/undraw_remotely_2j6y.svg')"
      />

      <div class="form-content">
        <h3 class="form-title">ورود</h3>
        <div>
          <label class="input-label">ایمیل شما</label>
          <input class="input" type="email" required />
        </div>
        <div>
          <label class="input-label">نام کامل شما</label>
          <input class="input" type="text" required />
        </div>
        <div>
          <label class="input-label">گذرواژه</label>
          <input class="input" type="password" required />
        </div>
        <div>
          <label class="input-label">تکرار گذرواژه</label>
          <input class="input" type="password" required />
        </div>

        <div class="input-checkbox">
          <label class="pt cont">
            <span dir="rtl" style="font-weight: bold"
              ><nuxt-link class="link-no-style" to="/terms_and_conditions"
                >قوانین و مقررات</nuxt-link
              >
              devsparkle را رعایت میکنم</span
            >
            <input type="checkbox" />
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
          <button @click="signin_submit" class="dvsp-button">ثبت نام</button>
        </div>

        <hr class="circle-hr" />

        <nuxt-link to="/Signin" class="link"
          >حساب کاربری دارید؟ وارد شوید!</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'

export default {
  data() {
    return {}
  },
  methods: {
    signin_submit() {
      alert('Hello World')
    },
  },
  components: {
    VueRecaptcha,
  },
}
</script>
