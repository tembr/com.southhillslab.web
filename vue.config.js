const path = require('path')
const webpack = require('webpack')
const config = require('config')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__APP_CONFIG__': JSON.stringify(config.get('frontend')),
      })
    ]
  },

  chainWebpack: config => {
      config.resolve.alias
          .set('src', path.resolve(__dirname, 'src'));
  },

  pwa: {
    workboxOptions: {
      templatedUrls: {
        '/': 'index.ssr.html'
      }
    }
  }
}
