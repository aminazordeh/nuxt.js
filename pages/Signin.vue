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
          <input class="input" type="email" required />
        </div>
        <div>
          <label class="input-label">گذرواژه</label>
          <input class="input" type="password" required />
        </div>

        <div class="input-checkbox">
          <label class="pt cont"
            >مرا به یاد داشته باش
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
          <button class="dvsp-button">ورود</button>
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

export default {
  data() {
    return {}
  },
  methods: {
    signin_submit() {},
  },
  components: {
    VueRecaptcha,
  },
}
</script>
