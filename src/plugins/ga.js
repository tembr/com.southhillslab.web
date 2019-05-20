import Vue from 'vue'
import Analytics from 'vue-analytics'

/* eslint-disable-next-line no-undef */
const config = __APP_CONFIG__

export default async ({ router }) => {
  // Only executed on client side
  if (process.client) {
    if (config.ga) {
      Vue.use(Analytics, {
        ...config.ga,
        router
      })
    }
  }
}
