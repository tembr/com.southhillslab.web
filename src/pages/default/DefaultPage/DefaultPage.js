import * as partials from 'src/partials'

export default {
  head: {
    title: 'Welcome'
  },
  components: {
    ...partials
  },
  // async asyncData(/*{ store }*/) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       // eslint-disable-next-line
  //       console.log('asyncData')
  //       resolve({
  //         foo: '111'
  //       })
  //     }, 1000)
  //   })
  //   // console.log('Async ')
  //   // const data = await api.get('some-data');
  //   //
  //   // // Populate your vuex store
  //   // store.commit('SET_DATA', data.vuex);
  //   //
  //   // // Send data to current component
  //   // return {
  //   //   foo: data.foo,
  //   // };
  // },
  // async serverPrefetch () {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       // eslint-disable-next-line
  //       console.log('serverPrefetch')
  //       resolve({
  //         bar: '222'
  //       })
  //     }, 1000)
  //   })
  // }
}
