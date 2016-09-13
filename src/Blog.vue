<template>

    <blog-header></blog-header>

    <div class="blog main container">
      <router-view></router-view>
    </div>

    <blog-footer></blog-footer>

</template>

<style lang="sass" src="./assets/scss/main.sass"></style>

<script>
  import BlogHeader from './components/header.vue'
  import BlogFooter from './components/footer.vue'

  // Vuex Initialization
  import store from './vuex/store'

  export default{
    name: 'main',
    store,
    components: {
      BlogHeader,
      BlogFooter
    }
  }
</script>
