<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <div id="router-view">
      <nuxt />
    </div>
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop'

export default {
  components: {
    HeaderTop,
  },
}
</script>
