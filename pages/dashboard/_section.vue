<template>
  <div id="dashboard">
    <div id="dashboard_index">
      <div id="topNavbar" class="pr-4 animate__animated animate__fadeInDown">
        <h1 id="headerBrand"><nuxt-link to="/">devsparkle.ir</nuxt-link></h1>

        <div>
          <div id="logged_user" dir="rtl">
            <div class="d-inline-block">
              <div id="user_avatar">
                <box-icon name="user"></box-icon>
              </div>
            </div>
            <div class="d-inline-block">
              <span id="logged_user_username">[admin] tahadostifam </span>
            </div>
          </div>
        </div>
      </div>
      <div class="animate__animated animate__fadeInLeft" id="leftBar">
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
        <h4
          class="
            header header-large
            text-right
            w-100
            d-block
            animate__animated animate__slideInRight
          "
        >
          داشبورد
        </h4>
        <div class="mt-3 p-0 flex">
          <div class="white-box animate__animated animate__zoomIn">
            <div class="white-box-icon">
              <box-icon name="home"></box-icon>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">1</div>
          </div>
          <div class="white-box mr-xl-3 animate__animated animate__zoomIn">
            <div class="white-box-icon">
              <box-icon name="home"></box-icon>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">2</div>
          </div>
          <div
            class="white-box mr-xl-3 ml-xl-3 animate__animated animate__zoomIn"
          >
            <div class="white-box-icon">
              <box-icon name="home"></box-icon>
            </div>
            <div class="white-box-header">باکس سفید</div>
            <div class="white-box-value">3</div>
          </div>
          <div class="white-box animate__animated animate__zoomIn">
            <div class="white-box-icon">
              <box-icon name="home"></box-icon>
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
export default {
  mounted() {
    if (
      this.$route.params.section == '' ||
      this.$route.params.section == undefined
    ) {
      this.$nuxt.$options.router.push('/dashboard/home')
    }
  },
}
</script>
