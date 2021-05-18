<template>
  <div id="dashboard">
    <div id="dashboard_index">
      <div id="topNavbar" class="pr-4">
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
      <div id="leftBar">
        <div id="leftBarDots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nuxt-link to="/"></nuxt-link>
      </div>
      <div id="dashboard_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    require('../assets/js/script')
  },
}
</script>
