<template>
  <div>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="commentBody"
        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary" @click="postComment">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">
          {{ comment.body }}
        </p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username,
            },
          }"
          class="comment-author"
        >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{
          comment.createAt | dateFormat("MMM DD, YYYY")
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { postCommentService, queryArticleCommentService } from "../service";
import { mapState } from "vuex";
export default {
  props: ["article"],
  data() {
    return {
      comments: [],
      commentBody: "",
    };
  },
  async mounted() {
    const { data } = await queryArticleCommentService(this.article.slug);
    this.comments = data.comments;
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async postComment() {
      if (this.commentBody) {
        try {
          await postCommentService(this.article.slug, {
            comment: {
                body: this.commentBody,
            }
          });
          const { data } = await queryArticleCommentService(this.article.slug);
          this.comments = data.comments;
        } catch {}
      }
    },
  },
};
</script>

<style></style>
