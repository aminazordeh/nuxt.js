export default {
  head: {
    titleTemplate: 'devsparkle.ir',
    title: 'devsparkle.ir',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'وبلاگ کد نویسی devsparkle.ir',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },

  css: [
    './assets/css/style.css',
    './assets/css/config.css',
    './assets/css/animate.min.css',
  ],

  components: true,

  buildModules: [],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  plugins: [
    {
      src: './assets/js/script.js',
      body: true,
      ssr: false,
      defer: true,
    },
  ],

  axios: {},

  pwa: {
    manifest: {
      name: 'devsparkle',
      short_name: 'devsparkle',
      theme_color: '#fff',
      background_color: '#fff',
      version: '1.0',
      author: 'Taha Dostifam',
      description: 'وبلاگ آموزش برنامه نویسی devsparkle',
      icons: [
        {
          src: './static/icons/60.png',
          type: 'image/png',
          sizes: '60x60',
        },
        {
          src: './static/icons/120.png',
          type: 'image/png',
          sizes: '120x120',
        },
        {
          src: './static/icons/144 .png',
          type: 'image/png',
          sizes: '144x144',
        },
        {
          src: './static/icons/152.png',
          type: 'image/png',
          sizes: '152x152',
        },
        {
          src: './static/icons/192.png',
          type: 'image/png',
          sizes: '192x192',
        },
        {
          src: './static/icons/384.png',
          type: 'image/png',
          sizes: '384x384',
        },
        {
          src: './static/icons/512.png',
          type: 'image/png',
          sizes: '512x512',
        },
      ],
      lang: 'fa',
    },
  },
}
