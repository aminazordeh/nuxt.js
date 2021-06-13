<template>
  <div id="dashboard">
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
                >{{ userInfo.full_name }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="leftBar">
        <div id="leftBarDots">
          <span></span>
          <span></span>
          <span></span>
        </div>
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
          <nuxt-link to="/" class="leftBarNavbar-Item">
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
          <nuxt-link to="/" class="leftBarNavbar-Item">
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
          <nuxt-link to="/" class="leftBarNavbar-Item">
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
          <nuxt-link to="/dashboard/section2" class="leftBarNavbar-Item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Desktop</title>
              <rect
                x="32"
                y="64"
                width="448"
                height="320"
                rx="32"
                ry="32"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M304 448l-8-64h-80l-8 64h96z"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 448H144"
              />
              <path
                d="M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z"
              />
            </svg>
          </nuxt-link>
          <nuxt-link to="/dashboard/section2" class="leftBarNavbar-Item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Desktop</title>
              <rect
                x="32"
                y="64"
                width="448"
                height="320"
                rx="32"
                ry="32"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M304 448l-8-64h-80l-8 64h96z"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M368 448H144"
              />
              <path
                d="M32 304v48a32.09 32.09 0 0032 32h384a32.09 32.09 0 0032-32v-48zm224 64a16 16 0 1116-16 16 16 0 01-16 16z"
              />
            </svg>
          </nuxt-link>
          <a href="" class="leftBarNavbar-Item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon"
              viewBox="0 0 512 512"
            >
              <title>Clipboard</title>
              <path
                d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <rect
                x="176"
                y="32"
                width="160"
                height="64"
                rx="26.13"
                ry="26.13"
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>
          </a>
          <a href="" class="leftBarNavbar-Item">
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
          </a>
        </div>
      </div>
      <div
        v-if="String(this.$route.params.section) == 'home'"
        id="dashboard_content"
      >
        <h4 class="header header-large text-right w-100 d-block">داشبورد</h4>
        <div class="mt-3 p-0 flex">
          <div class="white-box">
            <div class="white-box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Book</title>
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">1</div>
          </div>
          <div class="white-box mr-xl-3">
            <div class="white-box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Book</title>
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">2</div>
          </div>
          <div class="white-box mr-xl-3 ml-xl-3">
            <div class="white-box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Book</title>
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">3</div>
          </div>
          <div class="white-box">
            <div class="white-box-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
              >
                <title>Book</title>
                <path
                  d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">4</div>
          </div>
        </div>
      </div>
      <div
        id="dashboard_content"
        v-if="String(this.$route.params.section) == 'section2'"
      >
        Section 2
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
      userInfo: null,
    }
  },
  methods: {
    setUserInfo(data) {
      this.$set(this.$data, 'userInfo', data)
    },
    request_for_get_user_info() {
      this.$data.password = axios
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
          password: saved__user.email,
          token: saved__user.token,
          remember_me: true,
        })
      } else {
        this.$nuxt.$options.router.push('/signin')
      }
      this.request_for_get_user_info()
    }
  },
}
</script>
