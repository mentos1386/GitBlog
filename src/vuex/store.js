import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import modules
import posts from './modules/posts'
import errors from './modules/errors'
import util from './modules/util'

export default new Vuex.Store({
  modules: {
    posts,
    errors,
    util
  }
})
