let isDev = !(process.env.NODE_ENV === 'production');

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
    // baseURL: "http://localhost:3000/api",
    browserBaseURL: "/api"
  },
  build: {
    extractCSS: true,
    // CDN 地址, 当运行 nuxt build 时，会将.nuxt/dist/目录的内容上传到CDN， '/_nuxt/'为默认值
    // publicPath: '/_nuxt/',
    babel: {
      presets: [
        ['vue-app', {
          useBuiltIns: true,
          targets: {
            ie: 9,
            uglify: true
          }
        }]
      ]
    },
    vendor: ['babel-polyfill', 'axios', 'element-ui']
  },
  render: {
    resourceHints: false
  },
  plugins: ['~plugins/element-ui']
}
