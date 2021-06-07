exports.ids = [10];
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

/***/ })

};;
//# sourceMappingURL=index.js.map