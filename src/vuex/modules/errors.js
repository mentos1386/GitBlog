import {
  ERROR_API
} from '../mutation-types'

// Initial state
const state = {
  errors: []
}

// mutations
const mutations = {
  [ERROR_API] (state, response) {
    var error = {
      message: response.json(),
      request: response,
      type: 'ERROR_API',
      time: new Date()
    }

    state.errors.push(error)
  }
}

export default {
  state,
  mutations
}
