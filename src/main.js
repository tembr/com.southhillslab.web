import '@babel/polyfill'
import 'es6-promise/auto'

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import './plugins/vuetify'
import App from './App.vue'
import SmoothScroll from 'smoothscroll-polyfill'
import SvgIcon from 'vue-svgicon'
import './icons'

import { sync } from 'vuex-router-sync'
import { createStore } from './store'
import { createRouter } from './router'

SmoothScroll.polyfill()

Vue.use(Vuelidate)
Vue.use(SvgIcon, {
  defaultWidth: '1rem',
  defaultHeight: '1rem'
})

export async function createApp () {
  const store = await createStore()
  const router = await createRouter({ store })

  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, store, router }
}

createApp().then(
  ({ app }) => {
    app.$mount('#app')
  })
