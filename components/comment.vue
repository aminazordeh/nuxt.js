<template>
  <div class="comment" v-if="comment">
    <span class="comment_sender">{{ comment.comment_sender_name }}</span>
    <p class="comment_content">
      {{ comment.comment_content }}
    </p>
    <div
      v-if="
        comment.replies != undefined &&
        comment.replies != null &&
        comment.replies != [] &&
        comment.replies.length > 0
      "
      class="comment_reply"
    >
      <div v-for="reply in comment.replies" :key="reply.comment_id">
        <comment
          :comment="reply"
          :comments="comment.replies"
          :last_comment="reply.last_comment"
        ></comment>
      </div>
    </div>
    <div class="comment_send_reply_section">
      <div v-if="comment.show_reply_message" style="user-select: none">
        <textarea
          class="input border-input"
          type="text"
          placeholder="نظر شما..."
          dir="rtl"
          v-model="comment_content"
        ></textarea>
        <div
          v-if="alert_text != undefined && alert_text != ''"
          class="text-right d-block w-100"
        >
          {{ alert_text }}
        </div>
        <button
          @click="send_comment(comment.comment_id)"
          class="dvsp-button mt-2"
          style="border-radius: 3px"
        >
          ارسال
        </button>
        <button
          @click="hide_all_reply_message(comment.comment_id, false)"
          class="dvsp-button dvsp-button-outline mt-2"
          style="border-radius: 3px"
        >
          انصراف
        </button>
      </div>
    </div>
    <div class="comment_buttons">
      <button
        v-if="last_comment != true"
        @click="set_reply_message_state(comment.comment_id, true)"
        class="comment_button"
      >
        Reply
      </button>
    </div>
  </div>
  <div v-else dir="rtl">
    <small style="color: #777">خطایی رخ داده است...</small>
  </div>
</template>

<script>
import comment from './comment'
import configs from '../assets/js/configs'
import axios from 'axios'

export default {
  name: 'comment',
  components: {
    comment,
  },
  data() {
    return {
      comment_content: '',
      alert_text: '',
    }
  },
  methods: {
    set_reply_message_state(comment_id, state) {
      const comment = this.$props.comment
      comment.show_reply_message = state
    },
    send_comment(comment_id) {
      const email = this.$store.state.user.email
      const password = this.$store.state.user.password
      const token = this.$store.state.user.token
      if (
        email != undefined &&
        email != null &&
        email != '' &&
        password != undefined &&
        password != null &&
        password != '' &&
        token != undefined &&
        token != null &&
        token != ''
      ) {
        axios
          .post(configs.api_server_address + '/posts/comments/new', {
            email: email,
            password: password,
            token: token,
            comment_content: this.$data.comment_content,
            post_path: this.$route.params.get_post_with_path,
            reply_to: comment_id,
          })
          .then((response) => {
            console.log(response.data)
            switch (response.data.code) {
              case 200:
                // TODO
                alert('کامنت با موفقیت ثبت شد')
                break
              case 404:
                if (response.data.message == 'user not exist') {
                  return this.$nuxt.$options.router.push('/signin')
                }
                this.$set(
                  this.$data,
                  'alert_text',
                  'خطا در ثبت کامنت لطفا چند دقیقه بعد دوباره امتحان کنید.'
                )
                break
              case 400 || 401:
                this.$nuxt.$options.router.push('/signin')
                break
              case 503:
                if (response.data.message == 'email not verified') {
                  return this.$nuxt.$options.router.push('/signin')
                }
                this.$set(
                  this.$data,
                  'alert_text',
                  'خطایی در ثبت کامنت بوجود آمده است لطغا چند دقیقه بعد دوباره امتحان کنید.'
                )
                break
            }
          })
      } else {
        this.$nuxt.$options.router.push('/signin')
      }
    },
  },
  props: ['comment', 'comments', 'last_comment'],
}
</script>
