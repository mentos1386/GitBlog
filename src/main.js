import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// Load Config
import Config from '../config/blog'

// Bootstrap 4
require('bootstrap')

// install router
Vue.use(VueRouter)

// install vue-resource
Vue.use(VueResource)
// Set github API as root
Vue.http.options.root = Config.github.api

// create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
import { configRouter } from './routes.js'
configRouter(router)

// bootstrap the app
router.start(require('./Blog.vue'), 'blog')
