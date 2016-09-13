/* eslint-disable */

export function configRouter (router) {
  router.map({
    '/': {
      component: require('./components/frontpage.vue')
    },
    '/:post': {
      component: require('./components/post.vue')
    },
    // Not found (404)
    '*': {
      component: require('./components/errors/404.vue')
    }
  })

  // redirect
  router.redirect({
    'home': '/'
  })
}
