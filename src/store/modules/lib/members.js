// import { BACKEND } from 'src/remotes'
// import { omitBy, isUndefined } from 'lodash'

export const MEMBERS_UPDATE = 'members/update'

export default () => ({
  namespaced: true,
  state: () => ({
    members: Object.freeze({
      value: [],
      isLoading: false,
      isLoaded: false
    })
  }),
  mutations: {
    [MEMBERS_UPDATE]: (state, { isLoading, isLoaded, value }) => {
      state.members = Object.freeze({
        value,
        isLoading,
        isLoaded
      })
    }
  },
  getters: {
    members: state => state.members
  },
  actions: {
    // async fetchMembers () {
    //   const { data } = await BACKEND.get('public/members')
    //   return data.map(Object.freeze)
    // },
    // async loadMembers ({ state, commit, dispatch }) {
    //   if (!state.members.isLoaded && !state.members.isLoading) {
    //     commit(MEMBERS_UPDATE, {
    //       isLoading: true
    //     })
    //     try {
    //       const value = await dispatch('fetchMembers')
    //       commit(MEMBERS_UPDATE, {
    //         isLoading: false,
    //         isLoaded: true,
    //         value
    //       })
    //     } catch {
    //       commit(MEMBERS_UPDATE, {
    //         isLoading: false
    //       })
    //     }
    //   }
    // }
  }
})
