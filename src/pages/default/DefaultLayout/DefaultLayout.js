import * as partials from 'src/partials'

export default {
  head: {
    title: 'SouthHillsLab',
    titleTemplate: '%s | SouthHillsLab',
    htmlAttrs: {
      lang: 'en'
    },
    link: [
      { rel: 'icon', href: '/assets/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' },
    ],
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content:'IE=edge' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0' }
    ]
  },
  components: {
    ...partials
  }
}
