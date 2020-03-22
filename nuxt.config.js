export default {
  mode: 'spa',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/firebase',
    '@nuxtjs/vuetify'
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyBn1DP5AR2wN6irwNyI08XicNkR4CJdgMI',
      authDomain: 'devjokes-4031d.firebaseapp.com',
      databaseURL: 'https://devjokes-4031d.firebaseio.com',
      projectId: 'devjokes-4031d',
      storageBucket: 'devjokes-4031d.appspot.com',
      messagingSenderId: '746655741397',
      appId: '1:746655741397:web:ff32ddd58dcb90661bb95c',
      measurementId: 'G-LV52VK9K9J'
    },
    services: {
      firestore: true
    }
  },
  auth: {
    strategies: {
      github: {
        client_id: '04bd6ee857dcecce5db3',
        client_secret: '4bbe79e74357ff08631c4a7cf38f79517c1ef1d9'
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^nuxt-fire/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  vuetify: {
    themes: {
      light: {
        theme: {
          background: '#a6e2d0',
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  }
}
