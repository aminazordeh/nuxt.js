<template>
  <div id="verify_email">
    <!-- TODO -->
    <div v-if="!view_token_has_an_error">برای تایید ایمیل</div>
    <div
      v-if="view_token_has_an_error == true"
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
            <title>Warning</title>
            <path
              d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path
              d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
            <path d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z" />
          </svg>
        </div>
        <span
          style="color: #666; font-weight: 600"
          class="d-block mt-3"
          dir="rtl"
        >
          تایید ایمیل <span style="color: #ff002b">امکان پذیر نیست</span>...
          <br />
          لینک وارد شده صحیح نمی باشد.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      verify_email_token: this.$route.params.token,
      view_token_has_an_error: false,
    }
  },
  mounted() {
    if (
      this.$data.verify_email_token == undefined ||
      String(this.$data.verify_email_token).trim() == ''
    ) {
      this.$set(this.$data, 'view_token_has_an_error', true)
    }
  },
}
</script>
