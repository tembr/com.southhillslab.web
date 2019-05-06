import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'

import defaultRouter from './lib/defaultRouter'

Vue.use(Router)
Vue.use(Meta)

export async function createRouter ({ store }) {
  const router = new Router({
    mode: 'history'
  })

  router.addRoutes([
    ...defaultRouter({ store, router })
  ])

  return router
}
