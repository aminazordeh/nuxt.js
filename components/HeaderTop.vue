<template>
  <div
    v-bind:class="{
      hiddenHeaderTop:
        String(this.$route.path).includes('dashboard') == false ? false : true,
    }"
    id="headerTop"
  >
    <h1 id="headerBrand"><nuxt-link to="/">devsparkle.ir</nuxt-link></h1>

    <button class="menuButton" id="MenuButton" aria-label="Main Menu">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>

    <div class="Navbar" id="Navbar">
      <div class="margin-nav">
        <div
          class="Navbar-D-I-Block Navbar-Right pt-0 pr-0"
          style="top: -13px"
          v-bind:style="[
            logged ? { display: 'inline-block' } : { display: 'none' },
          ]"
        >
          <div class="Navbar-Dropdown pl-0" dir="rtl">
            <button class="Navbar-Dropdown-Button pl-0">
              <div id="logged_user">
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
            </button>
            <div
              v-if="
                userInfo != undefined &&
                userInfo != null &&
                userInfo != '' &&
                userInfo.full_name != undefined &&
                userInfo.full_name != null &&
                userInfo.full_name != ''
              "
              class="Navbar-Dropdown-Content"
            >
              <nuxt-link to="/dashboard" class="Navbar-Link">داشبورد</nuxt-link>
              <a class="Navbar-Link">تیکت ها</a>
              <a @click="logout_user" class="Navbar-Link"
                >خروج از حساب کاربری</a
              >
            </div>
          </div>
        </div>
        <div
          class="Navbar-D-I-Block Navbar-Right"
          v-bind:style="[
            logged ? { display: 'none' } : { display: 'inline-block' },
          ]"
        >
          <nuxt-link to="/Signup" class="dvsp-button">ثبت نام</nuxt-link>
          <nuxt-link
            to="/Signin"
            class="dvsp-button dvsp-button-outline"
            id="Navbar-Signup-Button"
            >ورود</nuxt-link
          >
        </div>

        <nav class="Navbar-D-I-Block">
          <nuxt-link to="/" class="Navbar-Link">خانه</nuxt-link>
          <nuxt-link to="/posts" class="Navbar-Link">پست ها</nuxt-link>
          <a class="Navbar-Link">دوره های آموزشی</a>
          <a class="Navbar-Link">نویسنده گان</a>
        </nav>

        <!-- 
          <div class="Navbar-Dropdown">
            <button class="Navbar-Dropdown-Button">دراپ داون</button>
            <div class="Navbar-Dropdown-Content">
              <nuxt-link to="/" class="Navbar-Link">آیتم ۱</nuxt-link>
              <a class="Navbar-Link">آیتم ۲</a>
              <a class="Navbar-Link">آیتم ۳</a>
            </div>
          </div>
         -->
      </div>
    </div>
  </div>
</template>

<script>
import configs from '../assets/js/configs'
import axios from 'axios'

export default {
  name: 'headerTop',
  mounted() {
    let saved__user = localStorage.getItem('saved__user')
    if (saved__user != undefined && saved__user != null) {
      saved__user = JSON.parse(saved__user)
      this.$data.password = axios
        .post(configs.api_server_address + '/users/auth/token', {
          email: saved__user.email,
          password: saved__user.password,
          token: saved__user.token,
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
                this.$store.commit('setUser', {
                  email: saved__user.email,
                  password: saved__user.password,
                  token: saved__user.token,
                  remember_me: true,
                })
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
    }
    this.getUserState()
  },
  data() {
    return {
      logged: false,
      userInfo: null,
    }
  },
  methods: {
    getUserState() {
      if (
        this.$store.state.user.email != '' &&
        this.$store.state.user.password != '' &&
        this.$store.state.user.email != undefined &&
        this.$store.state.user.password != undefined &&
        this.$store.state.user.email != null &&
        this.$store.state.user.password != null
      ) {
        this.$data.logged = true
      } else {
        this.$data.logged = false
      }
      require('../assets/js/script')
    },
    setUserInfo(data) {
      this.$set(this.$data, 'userInfo', data)
    },
    logout_user() {
      this.$store.commit('setUser', {
        email: '',
        password: '',
        token: '',
        remember_me: false,
      })
      this.$set(this.$data, 'logged', false)
    },
  },
  watch: {
    '$store.state.user.email': 'getUserState',
    '$store.state.userInfo'() {
      this.setUserInfo(this.$store.state.userInfo)
    },
  },
}
</script>
