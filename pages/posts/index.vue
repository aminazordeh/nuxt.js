<template>
  <div id="posts">
    <div id="posts_container" class="pb-5 mb-5">
      <template v-if="posts != undefined && posts.length > 0 && view == true">
        <div class="post-box" v-for="item in posts" :key="item.post_path">
          <div class="img-loader">
            <img
              :src="item.post_cover_img"
              alt="post cover image"
              class="post-cover-img"
              onload="this.classList.add('loaded')"
            />
          </div>
          <h2 class="post-header">
            {{ item.post_header }}
          </h2>
          <p class="post-description">
            {{ item.post_cover_text }}
          </p>
          <div class="post-read-more">
            <nuxt-link :to="'/posts/' + item.post_path" class="dvsp-button"
              >ادامه مطلب</nuxt-link
            >
          </div>
        </div>
      </template>
      <div
        v-else
        class="text-center w-100"
        style="position: absolute"
        dir="rtl"
      >
        <template v-if="view != false">
          <span
            div
            v-if="posts == undefined || posts.length == 0 || posts == null"
            style="color: #777"
            >هیچ پستی وجود ندارد.</span
          >
        </template>
        <span v-else :style="{ color: alert._color }">{{ alert._text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import configs from '../../assets/js/configs'
import axios from 'axios'
import terms_and_conditions from '../terms_and_conditions.vue'

export default {
  components: { terms_and_conditions },
  data() {
    return {
      view: false,
      alert: {
        _text: '',
        _color: '#777',
      },
      posts: [],
    }
  },
  mounted() {
    axios
      .get(configs.api_server_address + '/posts')
      .then((response) => {
        if (response.data.code == 200) {
          this.$set(this.$data, 'posts', response.data.data)
          this.$set(this.$data, 'view', true)
        } else {
          this.$set(this.$data, 'view', false)
          this.$set(this.$data, 'posts', [])
          this.$set(
            this.$data.alert,
            '_text',
            'خطایی در ارتباط با سرور رخ داده است.'
          )
          this.$set(this.$data.alert, '_color', 'red')
        }
      })
      .catch((err) => {
        this.$set(this.$data, 'view', false)
        this.$set(this.$data, 'posts', [])
        this.$set(
          this.$data.alert,
          '_text',
          'خطایی در ارتباط با سرور رخ داده است.'
        )
        this.$set(this.$data.alert, '_color', 'red')
      })
  },
}
</script>
