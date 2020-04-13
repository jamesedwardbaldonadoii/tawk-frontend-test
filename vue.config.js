// https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders

const path = require('path')
const dataObj = require('./data/data.json')

module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  configureWebpack: {
    output: {
      filename: 'dist/bundle.js'
    },
    optimization: {
      splitChunks: false
    },
    resolve: {
      alias: {
        fonts: path.resolve(__dirname, 'src/assets/fonts'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  css: {
    extract: {
      filename: 'dist/bundle.css'
    },
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_fonts.scss";
          @import "@/scss/_medias.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },
  devServer: {
    port: 9000,
    watchOptions: {
      clientLogLevel: 'warning'
    },
    before: function (app, server, compiler) {
      app.get('/api/categories', function (req, res) {
        res.json(dataObj.categories)
      })

      app.get('/api/category/*', function (req, res) {
        res.json(dataObj.articles)
      })

      app.get('/api/author/*', function (req, res) {
        let author = {}
        const authorId = req.params['0']

        for (let index = 0; index < dataObj.authors.length; index++) {
          if (dataObj.authors[index].id === authorId) {
            author = dataObj.authors[index]
            break
          }
        }
        res.json(author)
      })

      app.get('/api/search/*', function (req, res) {
        res.json(dataObj.articles)
      })
    }
  }
}
