exports.ids = [7,10];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryArticlesService", function() { return queryArticlesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryFeedArticlesService", function() { return queryFeedArticlesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryTagsService", function() { return queryTagsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavoriteService", function() { return addFavoriteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unFavoriteService", function() { return unFavoriteService; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const queryArticlesService = (params = {}) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles',
    params
  });
};
const queryFeedArticlesService = (params = {}) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/articles/feed',
    params
  });
};
const queryTagsService = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: '/api/tags'
  });
};
const addFavoriteService = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `/api/articles/${slug}/favorite`
  });
};
const unFavoriteService = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `/api/articles/${slug}/favorite`
  });
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=62614d11&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\"><ul class=\"nav nav-pills outline-active\">"+((_vm.user)?("<li class=\"nav-item\"><a href"+(_vm._ssrClass("nav-link",{ active: _vm.currentActiveTab === 0 }))+">Your Feed</a></li>"):"<!---->")+" <li class=\"nav-item\"><a href"+(_vm._ssrClass("nav-link",{ active: _vm.currentActiveTab === 1 }))+">Global Feed</a></li> "+((_vm.query.tag)?("<li class=\"nav-item\"><a href"+(_vm._ssrClass("nav-link",{ active: _vm.currentActiveTab === 2 }))+">"+_vm._ssrEscape("#"+_vm._s(_vm.query.tag))+"</a></li>"):"<!---->")+"</ul></div> "),(_vm.articles.length)?_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'profile-username',
                  params: {
                    username: article.author.username,
                  },
                }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(article.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormat")(article.createAt,'MMM DD, YYYY')))+"</span></div> <button"+(_vm._ssrAttr("disabled",_vm.currentArticle === article.slug))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
                name: 'article-id',
                params: {
                  id: article.slug,
                },
              }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}):_vm._ssrNode("暂无数据"),_vm._ssrNode(" <nav><ul class=\"pagination\">"+(_vm._ssrList((_vm.total),function(pageNumber){return ("<li"+(_vm._ssrClass("page-item",{ active: _vm.page === pageNumber }))+"><a href=\"javascript:void(0)\" class=\"page-link\">"+_vm._ssrEscape(_vm._s(pageNumber))+"</a></li>")}))+"</ul></nav>")],2),_vm._ssrNode(" <div class=\"col-md-3\"><div class=\"sidebar\"><p>Popular Tags</p> <div class=\"tag-list\">"+(_vm._ssrList((_vm.tags),function(tag){return ("<a href=\"javascript:void(0)\" class=\"tag-pill tag-default\">"+_vm._ssrEscape(_vm._s(tag))+"</a>")}))+"</div></div></div>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=62614d11&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./pages/service/index.js
var service = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "Home",

  async asyncData() {
    const limit = 20;
    const page = 1;
    const offset = (page - 1) * limit;
    const [articlesRes, tagRes] = await Promise.all([Object(service["queryArticlesService"])({
      limit,
      offset
    }), Object(service["queryTagsService"])()]);
    const {
      data
    } = articlesRes;
    const {
      data: tagData
    } = tagRes;
    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
      limit,
      offset,
      page,
      tags: tagData.tags
    };
  },

  data() {
    return {
      query: {
        tag: "" // 标签参数

      },
      currentActiveTab: 1,
      currentArticle: null
    };
  },

  computed: {
    total() {
      return Math.ceil(this.articlesCount / this.limit);
    },

    ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    async changePage(number) {
      const methodName = this.currentActiveTab === 0 ? service["queryFeedArticlesService"] : service["queryArticlesService"];
      this.page = number;
      const {
        data
      } = await methodName({
        limit: this.limit,
        offset: (number - 1) * this.limit,
        ...this.query
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
        await Object(service["addFavoriteService"])(article.slug);
        article.favoritesCount += 1;
      } else {
        await Object(service["unFavoriteService"])(article.slug);
        article.favoritesCount -= 1;
      }

      article.favorited = !article.favorited;
      this.currentArticle = null;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "49c8ce58"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map