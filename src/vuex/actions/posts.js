import {
  POSTS_LOAD,
  POSTS_GET
} from '../mutation-types'

import errorHandler from './errors'
import githubService from '../../services/github'
import Vue from 'vue'

export const getPosts = ({ dispatch }) => {
  return githubService.getPosts()
    .then((response) => {
      dispatch(POSTS_LOAD, response)
    })
    .catch((error) => errorHandler({ dispatch }, error))
}

export const getPost = ({ dispatch }, url) => {
  return Vue.http.get(url)
    .then((response) => {
      dispatch(POSTS_GET, response)
    })
    .catch((error) => errorHandler({ dispatch }, error))
}
