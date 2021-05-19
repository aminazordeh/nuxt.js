<template>
  <h1 v-if="error.statusCode === 404">
    <pageNotFound :error="otherError"></pageNotFound>
  </h1>
  <div
    v-else
    id="pageNotFound"
    style="overflow: hidden; min-heigth: calc(100% - var(--headerTop-heigth))"
  >
    <div
      style="position: relative"
      class="animate__animated animate__swing center-abs"
    >
      <img
        class="full-svg"
        :src="require('../assets/images/undraw_server_down_s4lk.svg')"
        alt="an rrror has occurred"
      />
      <span class="full-svg-text">خطایی رخ داده ست.</span>
    </div>
  </div>
</template>

<script>
import pageNotFound from '../components/pageNotFound'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  components: {
    pageNotFound,
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
