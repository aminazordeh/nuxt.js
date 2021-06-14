<template>
  <div id="get_post_with_path">
    <div v-if="post != undefined" class="container text-right mt-5" dir="rtl">
      <h1 class="header header-large" style="font-weight: 600">
        {{ post.post_header }}
      </h1>
      <span class="mt-2 d-block"
        >{{ post.post_publish_date }} - {{ post.post_author }}</span
      >
      <div
        v-if="
          saved__user_email != undefined &&
          saved__user_email != null &&
          String(saved__user_email).trim() != ''
        "
        class="d-inline-block"
      >
        <button
          style="
            padding: 5px 0px;
            border-radius: 0;
            background: transparent;
            border: none;
          "
          class="mt-2 dvsp-button btn-none button-with-spinner like-button"
          :class="{ liked: post_liked }"
          @click="toggleLikeButton"
        >
          <span
            class="text-black"
            style="position: relative; top: -8px; font-size: Roboto"
            >{{ post.post_likes }}</span
          >
          <div class="d-inline-block" style="position: relative; top: 3px">
            <svg
              v-if="this.post_liked == false"
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Heart</title>
              <path
                d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
            <svg
              v-if="this.post_liked == true"
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Heart</title>
              <path
                d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"
              />
            </svg>
          </div>
          <div
            id="like_button_loading"
            style="background: #fff"
            class="button_loading_state"
            v-if="post_like_button_loading_state"
          ></div>
        </button>
      </div>
      <div class="pt-2 w-100 d-block" v-html="post.post_content"></div>
    </div>
    <div
      v-else-if="post == undefined || (post == null && alert._text != '')"
      dir="rtl"
      class="text-center mt-5 w-100 d-block"
      :style="{ color: alert._color }"
    >
      {{ alert._text }}
    </div>
  </div>
</template>

<script>
import configs from '../../assets/js/configs'
import axios from 'axios'

export default {
  data() {
    return {
      post_liked: false,
      post: undefined,
      post_like_button_loading_state: false,
      alert: {
        _text: '',
        _color: '#777',
      },
      you_are_liked_this_post: 'undefined',
      saved__user_email: this.$store.state.user.email,
    }
  },
  watch: {
    '$store.state.user.email'(val) {
      if (
        this.$store.state.user.email != undefined &&
        this.$store.state.user.email != ''
      ) {
        this.$set(this.$data, 'saved__user_email', this.$store.state.user.email)
        this.updateLikeData()
      }
    },
  },
  created() {
    this.$set(this.$data, 'post_like_button_loading_state', true)
    axios
      .post(configs.api_server_address + '/posts/get_post', {
        post_path: this.$route.params.get_post_with_path,
      })
      .then((response) => {
        if (response.status == 200) {
          if (
            response.data != undefined &&
            response.data != null &&
            response.data.code == 200
          ) {
            this.$set(this.$data, 'post', response.data.data)
          } else if (
            response.data.status == 404 ||
            response.data.message == 'post not found'
          ) {
            this.$set(this.$data.alert, '_text', 'پست مورد نظر یافت نشد.')
            this.$set(this.$data.alert, '_color', '#777')
          } else {
            this.$set(
              this.$data.alert,
              '_text',
              'خطایی در سمت سرور رخ داده است.'
            )
            this.$set(this.$data.alert, '_color', 'red')
          }
        }
      })
      .catch((err) => {})
    this.updateLikeData()
  },
  methods: {
    updateLikeData() {
      this.$set(this.$data, 'post_like_button_loading_state', true)
      let delay = setInterval(() => {
        axios
          .post(configs.api_server_address + '/posts/get_post', {
            post_path: this.$route.params.get_post_with_path,
            email: this.$store.state.user.email
              ? this.$store.state.user.email
              : undefined,
          })
          .then((response) => {
            this.$set(this.$data, 'post_like_button_loading_state', false)
            if (response.status == 200) {
              if (
                response.data != undefined &&
                response.data != null &&
                response.data.code == 200
              ) {
                this.$set(
                  this.$data.post,
                  'post_likes',
                  response.data.data.post_likes
                )
                if (response.data.data.you_are_liked_this_post == true) {
                  this.$set(this.$data, 'post_liked', true)
                } else {
                  this.$set(this.$data, 'post_liked', false)
                }
              } else if (
                response.data.status == 404 ||
                response.data.message == 'post not found'
              ) {
                this.$set(this.$data.alert, '_text', 'پست مورد نظر یافت نشد.')
                this.$set(this.$data.alert, '_color', '#777')
              } else {
                this.$set(
                  this.$data.alert,
                  '_text',
                  'خطایی در سمت سرور رخ داده است.'
                )
                this.$set(this.$data.alert, '_color', 'red')
              }
            }
          })
          .catch((err) => {})
        clearInterval(delay)
      }, 500)
    },
    toggleLikeButton() {
      if (
        this.$store.state.user.email != '' &&
        this.$store.state.user.password != '' &&
        this.$store.state.user.email != undefined &&
        this.$store.state.user.password != undefined &&
        this.$store.state.user.email != null &&
        this.$store.state.user.password != null
      ) {
        axios
          .post(configs.api_server_address + '/posts/like_post', {
            email: this.$store.state.user.email,
            password: this.$store.state.user.password,
            token: this.$store.state.user.token,
            post_path: this.$route.params.get_post_with_path,
          })
          .then((response) => {
            if (response != undefined && response != '') {
              switch (response.data.code) {
                case 200:
                  if (response.data.message == 'liked') {
                    this.$set(this.$data, 'post_liked', true)
                  } else {
                    this.$set(this.$data, 'post_liked', false)
                  }
                  this.updateLikeData()
                  break
                case 503:
                  this.alert(
                    'خطایی در سمت سرور رخ داده لطفا چند ثانیه بعد امتحان کنید...'
                  )
                  break
                case 401 || 400 || 404:
                  this.$nuxt.$options.router.push('/signin')
                  break
              }
            }
          })
      }
    },
  },
}
</script>

<style>
#like_button_loading::after {
  border-top-color: #111;
}
</style>
