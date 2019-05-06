import Vue from 'vue'
import Vuex from 'vuex'

import * as modules from './modules'

Vue.use(Vuex)

export async function createStore () {
  const store = new Vuex.Store({
    modules: Object.entries(modules)
      .map(([key, factory]) => {
        return {
          key,
          value: factory()
        }
      })
      .reduce((t, entry) => ({
        ...t,
        [entry.key]: entry.value
      }), {}),
  })

  return store
}
