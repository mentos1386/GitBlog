import Vue from 'vue'
import { github } from '../../config/blog'

var postsFolder = 'repos/' + github.user + '/' + github.repo + '/contents/' + github.posts

export default {
  getPosts () {
    return Vue.http.get(postsFolder)
  }
}
