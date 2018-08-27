module.exports = {
  srcDir: __dirname,
  head: {
    title: 'chenxiblog',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=no'},
      {hid: 'description', name: 'description', content: 'chenxiblog'},
      {name:"format-detection",content:"telephone=no"},
      {name: "keywords", content: "chenxiblog"}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/img/fav.ico'}
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    {src: '~/assets/css/global.less', lang: 'less'}
  ],
  loading: {
    color: '#4891ff'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: "http://127.0.0.1:3110/api",
    browserBaseURL: "/api"
  },
  build: {
    extractCSS: true,
    publicPath: '/_nuxt/',
    babel: {
      presets: [
        ['vue-app',
          {
            useBuiltIns: true,
            targets: {
              ie: 9,
              uglify: true
            }
          }
        ]
      ]
    },
    vendor: ['babel-polyfill', 'axios', 'element-ui']
  },
  render: {
    resourceHints: false
  },
  plugins: ['~plugins/element-ui']
}
