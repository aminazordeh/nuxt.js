<template>
  <div id="headerTop">
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
        <div class="Navbar-D-I-Block" v-if="this.logged == true">
          <div class="Navbar-Dropdown pl-0" dir="rtl">
            <button class="Navbar-Dropdown-Button pl-0">
              <div id="logged_user">
                <div class="d-inline-block">
                  <div id="user_avatar">
                    <box-icon name="user"></box-icon>
                  </div>
                </div>
                <div class="d-inline-block">
                  <span id="logged_user_username">[admin] tahadostifam </span>
                </div>
              </div>
            </button>
            <div class="Navbar-Dropdown-Content">
              <nuxt-link to="/dashboard" class="Navbar-Link">داشبورد</nuxt-link>
              <a class="Navbar-Link">تیکت ها</a>
              <a class="Navbar-Link">خروج از حساب کاربری</a>
            </div>
          </div>
        </div>
        <div class="Navbar-D-I-Block" v-else>
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
          <a class="Navbar-Link">پست ها</a>
          <div class="Navbar-Dropdown">
            <button class="Navbar-Dropdown-Button">دراپ داون</button>
            <div class="Navbar-Dropdown-Content">
              <nuxt-link to="/" class="Navbar-Link">آیتم ۱</nuxt-link>
              <a class="Navbar-Link">آیتم ۲</a>
              <a class="Navbar-Link">آیتم ۳</a>
            </div>
          </div>
          <a class="Navbar-Link">ارسال تیکت</a>
          <a class="Navbar-Link">نویسنده گان</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerTop',
  data() {
    return {
      logged: true,
    }
  },
}
</script>
