const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: './'
  }
} : {}
module.exports = {
  /*
  ** Route Base
  */
  ...routerBase,
  /*
  ** Headers of the page
  */  
  head: {
    title: 'Alejandro Berbin - Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name:'title', content:'Alejandro Berbin - Frontend and Backend Web Developer'},
      { hid: 'description', name: 'description', content: 'Portfolio of Alejandro Berbin frontend and backend Web Developer currently based in Caracas, Distrito Capital (Venezuela)' },
      { name:'keywords', content:'portfolio, web, developer, web developer, backend, frontend, alejandro, berbin, alejandro berbin'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  css: [
    { src:'~/assets/scss/main.scss', lang: 'scss' }, 
  ],
  modules: [
    ['nuxt-sass-resources-loader','~/assets/scss/main.scss'],
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],
  plugins: [
    //{ src: '~plugins/vue-hammer', ssr: false }
  ],
  vendor: [
    'vue-hammer'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            lazy: true
          }
        })
        watch: ['~/.nuxt/support.js']
        babel: {
          presets: ['env']
        }
      }
    }
  }
}