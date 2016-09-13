<template>

  <vue-markdown :source="body"></vue-markdown>

</template>

<script>
  import VueMarkdown from 'vue-markdown'

  import { posts } from '../vuex/getters'
  import {
    getPost,
    getPosts
  } from '../vuex/actions/posts'
  import { setTitle } from '../vuex/actions/util'

  export default {
    name: 'Post',
    vuex: {
      getters: {
        posts
      },
      actions: {
        getPost,
        getPosts,
        setTitle
      }
    },
    data () {
      return {
        post: {},
        body: ''
      }
    },
    components: {
      VueMarkdown
    },
    methods: {
      checkLoaded: function () {
        // Find loaded post (if exists) and set it's body as this.body
        this.posts.loaded.forEach((loaded) => {
          if (loaded.url === this.post.download_url) {
            this.body = loaded.body
          }
        })
      },
      init: function () {
        // Find Post in posts.list
        this.posts.list.forEach((post) => {
          if (post.link === this.$route.params.post) {
            this.post = post
          }
        })

        // Set page Title
        this.setTitle(this.post.title)

        // Check if post was all ready loaded
        // And store loaded body as post.body
        this.checkLoaded()

        // If post wasn't yet loaded, we try to load it now
        if (this.body === '') {
          // Then store loaded body as post.body
          this.getPost(this.post.download_url).then(this.checkLoaded)
        }
      }
    },
    route: {
      data () {
        if (this.posts.list.length === 0) {
          // Try to Load posts if list is empty
          // Then continue with initialization
          this.getPosts().then(this.init)
        } else {
          // Else just continue with initialization
          this.init()
        }
      }
    }
  }
</script>
