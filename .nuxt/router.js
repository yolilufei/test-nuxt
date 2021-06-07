import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49203b82 = () => interopDefault(import('../pages/create-article/index.vue' /* webpackChunkName: "pages/create-article/index" */))
const _0a6a8425 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _4ae2dd3e = () => interopDefault(import('../pages/service/index.js' /* webpackChunkName: "pages/service/index" */))
const _ef6e8206 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _c1fa2392 = () => interopDefault(import('../pages/article/service/index.js' /* webpackChunkName: "pages/article/service/index" */))
const _2fe8b838 = () => interopDefault(import('../pages/login/service/index.js' /* webpackChunkName: "pages/login/service/index" */))
const _5e96060c = () => interopDefault(import('../pages/settings/service/index.js' /* webpackChunkName: "pages/settings/service/index" */))
const _41df8024 = () => interopDefault(import('../pages/article/components/article-comments.vue' /* webpackChunkName: "pages/article/components/article-comments" */))
const _7902d3b5 = () => interopDefault(import('../pages/article/components/article-meta.vue' /* webpackChunkName: "pages/article/components/article-meta" */))
const _48aeefcc = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _5e7d26f0 = () => interopDefault(import('../pages/profile/_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _0425bc0b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _8172fcec = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _34ebd824 = () => interopDefault(import('../pages/create-article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/create-article",
    component: _49203b82,
    name: "create-article"
  }, {
    path: "/login",
    component: _0a6a8425,
    name: "login"
  }, {
    path: "/service",
    component: _4ae2dd3e,
    name: "service"
  }, {
    path: "/settings",
    component: _ef6e8206,
    name: "settings"
  }, {
    path: "/article/service",
    component: _c1fa2392,
    name: "article-service"
  }, {
    path: "/login/service",
    component: _2fe8b838,
    name: "login-service"
  }, {
    path: "/settings/service",
    component: _5e96060c,
    name: "settings-service"
  }, {
    path: "/article/components/article-comments",
    component: _41df8024,
    name: "article-components-article-comments"
  }, {
    path: "/article/components/article-meta",
    component: _7902d3b5,
    name: "article-components-article-meta"
  }, {
    path: "/article/:id?",
    component: _48aeefcc,
    name: "article-id"
  }, {
    path: "/profile/:username?",
    component: _5e7d26f0,
    name: "profile-username"
  }, {
    path: "/",
    component: _0425bc0b,
    name: "index"
  }, {
    path: "/register",
    component: _8172fcec,
    name: "register"
  }, {
    path: "/edit-article",
    component: _34ebd824,
    name: "edit-article"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
