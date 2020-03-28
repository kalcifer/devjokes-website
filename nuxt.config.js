export default {
  mode: 'spa',
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=VT323&display=swap'
      }
    ]
  },

  loading: { color: '#fff' },

  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/firebase',
    '@nuxtjs/vuetify'
  ],
  firebase: {
    // config: {
    //   apiKey: 'AIzaSyBn1DP5AR2wN6irwNyI08XicNkR4CJdgMI',
    //   authDomain: 'devjokes-4031d.firebaseapp.com',
    //   databaseURL: 'https://devjokes-4031d.firebaseio.com',
    //   projectId: 'devjokes-4031d',
    //   storageBucket: 'devjokes-4031d.appspot.com',
    //   messagingSenderId: '746655741397',
    //   appId: '1:746655741397:web:eb97540b38dd976f1bb95c',
    //   measurementId: 'G-FX1B0QZ1VB'
    // },
    config: {
      apiKey: process.env.FIREBASE_APIKEY,
      authDomain: process.env.FIREBASE_AUTHDOMAIN,
      databaseURL: process.env.FIREBASE_DATABASEURL,
      projectId: process.env.FIREBASE_PROJECTID,
      storageBucket: process.env.FIREBASE_STORAGEBUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
      appId: process.env.FIREBASE_APPID,
      measurementId: process.env.FIREBASE_MEASUREMENTID
    },
    services: {
      firestore: true
    }
  },
  auth: {
    strategies: {
      github: {
        client_id: process.env.GITHUB_CLIENTID,
        client_secret: process.env.GITHUB_CLIENTSECRET
      }
      // github: {
      //   client_id: process.env.GITHUB_CLIENTID || '3b8bc77bfcbd3a4747d5',
      //   client_secret:
      //     process.env.GITHUB_CLIENTSECRET ||
      //     '39b935177380c787b8222502d4652c0eec3173c8'
      // }
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
    theme: {
      themes: {
        light: {
          background: '#1b262c',
          primary: '#008080',
          secondary: '#424242',
          accent: '#ffa372',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  }
}
