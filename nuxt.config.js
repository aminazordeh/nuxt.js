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
    script: [
      { src: 'https://unpkg.com/boxicons@latest/dist/boxicons.js', body: true },
    ],
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
      ssr: false,
    },
  ],

  axios: {},

  pwa: {
    manifest: {
      lang: 'fa',
    },
  },
}
