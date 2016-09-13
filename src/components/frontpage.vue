<template>

  <ul class="list-group">
    <a v-for="post in posts.list" v-link="{ path: post.link }" class="list-group-item">{{ post.title }}</a>
  </ul>

</template>

<script>
  import { getPosts } from '../vuex/actions/posts'
  import { posts } from '../vuex/getters'

  import { setTitle } from '../vuex/actions/util'
  import { blog } from '../../config/blog'

  export default {
    name: 'FrontPage',
    vuex: {
      getters: {
        posts
      },
      actions: {
        setTitle,
        getPosts
      }
    },
    ready () {
      // Set Default Title from Config File
      this.setTitle(blog.title)
    },
    route: {
      data () {
        if (this.posts.list.length === 0) {
          // Try to Load posts if list is empty
          this.getPosts()
        }
      }
    }
  }
</script>

<style scoped>
</style>
