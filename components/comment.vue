<template>
  <div class="comment" v-if="comment">
    <span class="comment_sender">{{ comment.message_id }}</span>
    <p class="comment_content">
      {{ comment.content }}
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
      <div v-for="reply in comment.replies" :key="reply.message_id">
        <comment
          :comment="reply"
          :comments="comment.replies"
          :last_comment="reply.last_comment"
        ></comment>
      </div>
    </div>
    <div class="comment_send_reply_section">
      <!-- TODO -->
      <div v-if="comment.show_reply_message" style="user-select: none">
        <textarea
          class="input border-input"
          type="text"
          placeholder="نظر شما..."
          dir="rtl"
        ></textarea>
        <button class="dvsp-button mt-2" style="border-radius: 3px">
          ارسال
        </button>
        <button
          @click="set_reply_message_state(comment.message_id, false)"
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
        @click="set_reply_message_state(comment.message_id, true)"
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

export default {
  name: 'comment',
  components: {
    comment,
  },
  methods: {
    hide_all_reply_message() {
      const comments = this.$props.comments
      comments.forEach((comment) => {
        comment.show_reply_message = false
      })
    },
    set_reply_message_state(message_id, state) {
      const comment = this.$props.comment
      this.hide_all_reply_message()
      comment.show_reply_message = state
    },
  },
  props: ['comment', 'comments', 'last_comment'],
}
/*
<div class="comment" v-for="f1 in comments" :key="f1.sender_id">
<span class="comment_sender">{{ f1.message_id }}</span>
<p class="comment_content">
    {{ f1.content }}
</p>
<div class="comment_send_reply_section">
    <!-- TODO -->
    <div v-if="f1.show_reply_message" style="user-select: none">
    <textarea
        class="input border-input"
        type="text"
        placeholder="نظر شما..."
        dir="rtl"
    ></textarea>
    <button class="dvsp-button mt-2" style="border-radius: 3px">
        ارسال
    </button>
    <button
        @click="set_reply_message_state(f1.message_id, false)"
        class="dvsp-button dvsp-button-outline mt-2"
        style="border-radius: 3px"
    >
        انصراف
    </button>
    </div>
</div>
<div class="comment_buttons">
    <button
    @click="set_reply_message_state(f1.message_id, true)"
    class="comment_button"
    >
    Reply
    </button>
</div>
</div>

hide_all_reply_message_sections() {
    const comments = this.$data.comments
    comments.forEach((item) => {
    item.show_reply_message = false
    })
},
set_reply_message_state(message_id, state) {
    const comments = this.$data.comments
    this.hide_all_reply_message_sections()
    if (comments != undefined && comments != null && comments != []) {
    comments.forEach((item) => {
        if (item.message_id == message_id) {
        item.show_reply_message = state
        }
    })
    }
},
*/
</script>
