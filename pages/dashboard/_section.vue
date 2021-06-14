<template>
  <div id="dashboard">
    <div
      v-if="
        userInfo != undefined &&
        userInfo != null &&
        userInfo != '' &&
        userInfo.access != 'user'
      "
      v-bind:style="{
        backgroundColor: userInfo.access == 'admin' ? '#111' : '#1a5cff',
      }"
      id="user_access_badge"
    >
      <template v-if="userInfo.access == 'admin'"> مدیر </template>
      <template v-else-if="userInfo.access == 'writer'"> نویسنده </template>
    </div>
    <div id="dashboard_index">
      <div id="topNavbar" class="pr-sm-4">
        <h1 id="headerBrand"><nuxt-link to="/">devsparkle.ir</nuxt-link></h1>
        <div>
          <div id="logged_user" dir="rtl">
            <div class="d-inline-block">
              <div id="user_avatar">
                <svg
                  style="width: 24px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Person</title>
                  <path
                    d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                  <path
                    d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                </svg>
              </div>
            </div>
            <div class="d-inline-block">
              <span
                v-if="
                  userInfo != undefined &&
                  userInfo != null &&
                  userInfo != '' &&
                  userInfo.full_name != undefined &&
                  userInfo.full_name != null &&
                  userInfo.full_name != ''
                "
                id="logged_user_username"
              >
                {{ userInfo.full_name }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="leftBar">
        <div id="leftBarDots"><span></span><span></span><span></span></div>
        <div id="leftBarNavbar">
          <nuxt-link to="/dashboard/home" class="leftBarNavbar-Item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Home</title>
              <path
                d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </nuxt-link>
          <nuxt-link to="/dashboard/bookmarks" class="leftBarNavbar-Item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Bookmarks</title>
              <path
                d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
      <!-- NOTE Views -->
      <!-- NOTE  -->
      <div
        v-if="
          String(this.$route.params.section) == 'home' &&
          userInfo != undefined &&
          userInfo != null &&
          userInfo != ''
        "
        id="dashboard_content"
      >
        <h4 class="header header-large text-right w-100 d-block mb-2">
          اطلاعات شما
        </h4>
        <div class="white-box">
          <div class="row row-md-column">
            <div class="col ml-md-3">
              <label class="input-label">نام کامل شما</label>
              <input v-model="userInfo.full_name" class="input" type="text" />
            </div>
            <div class="col">
              <label class="input-label">ایمیل شما</label>
              <input
                readonly
                v-model="userInfo.email"
                class="input"
                type="text"
              />
            </div>
          </div>
          <div class="row row-md-column">
            <div class="col ml-md-3">
              <label class="input-label">گذرواژه</label>
              <input v-model="new_password" class="input" type="text" />
            </div>
            <div class="col">
              <label class="input-label">تکرار گذرواژه</label>
              <input v-model="new_password_repeat" class="input" type="text" />
            </div>
          </div>
          <button
            :disabled="save_userinfo_submit_button_loading_sate"
            class="dvsp-button button-with-spinner mt-4"
          >
            ثبت
            <div
              class="button_loading_state"
              v-if="save_userinfo_submit_button_loading_sate"
            ></div>
          </button>
        </div>
      </div>
      <div
        id="dashboard_content"
        v-if="String(this.$route.params.section) == 'bookmarks'"
      >
        <h4 class="header header-large text-right w-100 d-block mb-2">
          نشان شده ها
        </h4>
        <div
          id="posts_container"
          class="w-100 mt-0 pt-0 mb-5 pt-5 padding-bottom: 100px;"
        >
          <template>
            <div class="post-box">
              <div class="img-loader">
                <img
                  src="https://picsum.photos/900/1200"
                  alt="post cover image"
                  class="post-cover-img"
                  onload="this.classList.add('loaded')"
                />
              </div>
              <h2 class="post-header">asdasdasdasdasd</h2>
              <p class="post-description">asdasdasdasdas</p>
              <div class="post-read-more">
                <button
                  class="
                    ml-1
                    dvsp-button dvsp-button-icon dvsp-button-danger
                    normal-pad
                  "
                  style="border-radius: 3px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <title>Trash</title>
                    <path
                      d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M80 112h352"
                    />
                    <path
                      d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </button>
                <nuxt-link
                  to="/posts/aaaa"
                  class="dvsp-button dvsp-button-icon normal-pad"
                  style="border-radius: 3px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <title>Eye</title>
                    <path
                      d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle
                      cx="256"
                      cy="256"
                      r="80"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import configs from '../../assets/js/configs'
import axios from 'axios'

export default {
  data() {
    return {
      userInfo: {
        full_name: '',
        email: '',
        password: '',
        access: '',
        bookmarks: [],
      },
      new_password: '',
      new_password_repeat: '',
      save_userinfo_submit_button_loading_sate: false,
    }
  },
  methods: {
    setUserInfo(data) {
      this.$set(this.$data, 'userInfo', data)
    },
    request_for_get_user_info() {
      axios
        .post(configs.api_server_address + '/users/auth/token', {
          email: this.$store.state.user.email,
          password: this.$store.state.user.password,
          token: this.$store.state.user.token,
        })
        .then((response) => {
          if (
            response.data != undefined &&
            response.data.code != undefined &&
            response.data != null &&
            response.data.code != null
          ) {
            switch (response.data.code) {
              case 200:
                this.setUserInfo(response.data.user_info)
                break
              case 401:
                return console.error('saved user token not valid')
                break
              case 400:
                return console.error('error in login with saved user')
                break
            }
          } else {
            return console.error('error in send request to api server')
          }
        })
    },
  },
  mounted() {
    if (
      this.$route.params.section == '' ||
      this.$route.params.section == undefined
    ) {
      return this.$nuxt.$options.router.push('/dashboard/home')
    }

    if (
      this.$store.state.user.email != '' &&
      this.$store.state.user.password != '' &&
      this.$store.state.user.email != undefined &&
      this.$store.state.user.password != undefined &&
      this.$store.state.user.email != null &&
      this.$store.state.user.password != null
    ) {
      this.request_for_get_user_info()
    } else {
      let saved__user = localStorage.getItem('saved__user')
      if (saved__user != undefined && saved__user != null) {
        saved__user = JSON.parse(saved__user)
        this.$store.commit('setUser', {
          email: saved__user.email,
          password: saved__user.password,
          token: saved__user.token,
          remember_me: true,
        })
        this.request_for_get_user_info()
      } else {
        this.$nuxt.$options.router.push('/signin')
      }
      this.request_for_get_user_info()
    }
  },
}
</script>
