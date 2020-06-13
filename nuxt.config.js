export default {
  server: {port: 3001},
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Impact- A Global Research Project.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/vueTyper.js', ssr: false}, 
    '~/plugins/font-awesome',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/color-mode',

    ['nuxt-i18n', {
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      },

      locales: [
        {
          code: 'en',
          file: 'en-US.json'
        },
        {
          code: 'zh-HK',
          file: 'zh-HK.json'
        },
        {
          code: 'zh-TW',
          file: 'zh-TW.json'
        }
      ],
      lazy: true,
      langDir: 'assets/locales/'
    }],

    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
      ]
    }],
    
    // [
    //   '@nuxtjs/firebase',
    //   {
    //     config: {
    //       apiKey: "AIzaSyCR3KEuvWg0KrIVJ1vo-HABFCh1ai_7YO0",
    //       authDomain: "impact-2021.firebaseapp.com",
    //       databaseURL: "https://impact-2021.firebaseio.com",
    //       projectId: "impact-2021",
    //       storageBucket: "impact-2021.appspot.com",
    //       messagingSenderId: "70403627897",
    //       appId: "1:70403627897:web:b7a2a08979e09cd5642da8",
    //       measurementId: "G-Y79P3J0B1B"
    //     },
    //     services: {
    //       auth: {
    //         ssr:{
    //           serverLogin: true
    //       }
    //     }
    //     }
    //   }
    // ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
