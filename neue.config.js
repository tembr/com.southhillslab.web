module.exports = {
  spaPaths: ['/private', '/private/**/*'],
  paths: {
    src: '@',
  },
  plugins: {
    ga: {
      src: '@/plugins/ga.js',
      ssr: false
    },
    vuetify: {
      src: '@/plugins/vuetify.js',
      ssr: true
    },
    smoothscroll: {
      src: '@/plugins/smoothscroll.js',
      ssr: false
    }
  },
  ssr: {
    // It uses Koa
    // server(app) {
    //   require('./api')(app);
    // }
  }
};
