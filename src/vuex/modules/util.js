import {
  UTIL_TITLE
} from '../mutation-types'

// Initial state
const state = {
  title: ''
}

// mutations
const mutations = {
  [UTIL_TITLE] (state, title) {
    state.title = title
  }
}

export default {
  state,
  mutations
}
