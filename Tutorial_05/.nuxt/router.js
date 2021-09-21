import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59cfdfb8 = () => interopDefault(import('../pages/authors_index.vue' /* webpackChunkName: "pages/authors_index" */))
const _0e8c9846 = () => interopDefault(import('../pages/books_index.vue' /* webpackChunkName: "pages/books_index" */))
const _2d6f38de = () => interopDefault(import('../pages/publishers_index.vue' /* webpackChunkName: "pages/publishers_index" */))
const _0064a46f = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _039c390c = () => interopDefault(import('../pages/authors/_slug.vue' /* webpackChunkName: "pages/authors/_slug" */))
const _3f10c12e = () => interopDefault(import('../pages/books/_slug.vue' /* webpackChunkName: "pages/books/_slug" */))
const _19cc8c79 = () => interopDefault(import('../pages/publishers/_slug.vue' /* webpackChunkName: "pages/publishers/_slug" */))
const _c0bb7f4a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/authors_index",
    component: _59cfdfb8,
    name: "authors_index"
  }, {
    path: "/books_index",
    component: _0e8c9846,
    name: "books_index"
  }, {
    path: "/publishers_index",
    component: _2d6f38de,
    name: "publishers_index"
  }, {
    path: "/search",
    component: _0064a46f,
    name: "search"
  }, {
    path: "/authors/:slug?",
    component: _039c390c,
    name: "authors-slug"
  }, {
    path: "/books/:slug?",
    component: _3f10c12e,
    name: "books-slug"
  }, {
    path: "/publishers/:slug?",
    component: _19cc8c79,
    name: "publishers-slug"
  }, {
    path: "/",
    component: _c0bb7f4a,
    name: "index"
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
