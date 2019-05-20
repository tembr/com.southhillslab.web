import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'

import defaultRouter from './lib/defaultRouter'

Vue.use(Router)
Vue.use(Meta)

export default function () {
  const router = new Router({
    // mode: process.ssr ? 'history' : 'hash',
    mode: 'history',
    routes: [],
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        const el = document.querySelector (to.hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          return null
        }
        return { selector: to.hash }
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 }
      }
    }
  })

  router.addRoutes([
    ...defaultRouter()
  ])

  return router
}
