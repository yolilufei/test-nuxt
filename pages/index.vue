<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <a
                  class="nav-link"
                  href=""
                  :class="{ active: currentActiveTab === 0 }"
                  @click.prevent="
                    currentActiveTab = 0;
                    queryFeedArticles();
                  "
                  >Your Feed</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href=""
                  :class="{ active: currentActiveTab === 1 }"
                  @click.prevent="
                    currentActiveTab = 1;
                    queryArticles('');
                  "
                  >Global Feed</a
                >
              </li>
              <li class="nav-item" v-if="query.tag">
                <a
                  class="nav-link"
                  href=""
                  :class="{ active: currentActiveTab === 2 }"
                  @click.prevent="currentActiveTab = 2"
                  >#{{ query.tag }}</a
                >
              </li>
            </ul>
          </div>

          <template v-if="articles.length">
            <div
              class="article-preview"
              v-for="article in articles"
              :key="article.slug"
            >
              <div class="article-meta">
                <nuxt-link
                  :to="{
                    name: 'profile-username',
                    params: {
                      username: article.author.username,
                    },
                  }"
                  ><img :src="article.author.image"
                /></nuxt-link>
                <div class="info">
                  <nuxt-link
                  :to="{
                    name: 'profile-username',
                    params: {
                      username: article.author.username,
                    },
                  }"
                  >{{article.author.username}}</nuxt-link>
                  <span class="date">{{ article.createAt | dateFormat('MMM DD, YYYY') }}</span>
                </div>
                <button
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  @click="toggleFavorite(article)"
                  :class="{ active: article.favorited }"
                  :disabled="currentArticle === article.slug"
                >
                  <i class="ion-heart"></i> {{ article.favoritesCount }}
                </button>
              </div>
              <nuxt-link
                :to="{
                  name: 'article-id',
                  params: {
                    id: article.slug,
                  },
                }"
                class="preview-link"
              >
                <h1>{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <span>Read more...</span>
              </nuxt-link>
            </div>
          </template>
          <template v-else>暂无数据</template>
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                :class="{ active: page === pageNumber }"
                v-for="pageNumber in total"
                :key="pageNumber"
                @click="changePage(pageNumber)"
              >
                <a class="page-link" href="javascript:void(0)">{{
                  pageNumber
                }}</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <a
                href="javascript:void(0)"
                v-for="tag in tags"
                :key="tag"
                class="tag-pill tag-default"
                @click="queryArticles(tag)"
                >{{ tag }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  addFavoriteService,
  queryArticlesService,
  queryFeedArticlesService,
  queryTagsService,
  unFavoriteService,
} from "./service";
export default {
  name: "Home",
  async asyncData() {
    const limit = 20;
    const page = 1;
    const offset = (page - 1) * limit;
    const [articlesRes, tagRes] = await Promise.all([
      queryArticlesService({
        limit,
        offset,
      }),
      queryTagsService(),
    ]);
    const { data } = articlesRes;
    const { data: tagData } = tagRes;
    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      limit,
      offset,
      page,
      tags: tagData.tags,
    };
  },
  data() {
    return {
      query: {
        tag: "", // 标签参数
      },
      currentActiveTab: 1,
      currentArticle: null,
    };
  },
  computed: {
    total() {
      return Math.ceil(this.articlesCount / this.limit);
    },
    ...mapState(["user"]),
  },
  methods: {
    async changePage(number) {
      const methodName =
        this.currentActiveTab === 0
          ? queryFeedArticlesService
          : queryArticlesService;
      this.page = number;
      const { data } = await methodName({
        limit: this.limit,
        offset: (number - 1) * this.limit,
        ...this.query,
      });
      this.articles = data.articles;
      this.articlesCount = data.articlesCount;
      if (this.query.tag) {
        this.currentActiveTab = 2;
      }
    },
    queryArticles(tag) {
      this.query.tag = tag;
      this.changePage(1);
    },
    queryFeedArticles() {
      this.query.tag = "";
      this.changePage(1);
    },
    async toggleFavorite(article) {
      this.currentArticle = article.slug;
      if (!article.favorited) {
        await addFavoriteService(article.slug);
        article.favoritesCount += 1;
      } else {
        await unFavoriteService(article.slug);
        article.favoritesCount -= 1;
      }
      article.favorited = !article.favorited
      this.currentArticle = null;
    }
  },
};
</script>
