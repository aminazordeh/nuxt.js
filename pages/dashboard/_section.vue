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
            <box-icon name="home-alt"></box-icon>
          </nuxt-link>
          <nuxt-link to="/dashboard/section2" class="leftBarNavbar-Item">
            <box-icon name="desktop"></box-icon>
          </nuxt-link>
          <a href="" class="leftBarNavbar-Item">
            <box-icon name="clipboard"></box-icon>
          </a>
          <a href="" class="leftBarNavbar-Item">
            <box-icon name="bookmark-alt"></box-icon>
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
    }
  },
}
</script>
