let isDev = !(process.env.NODE_ENV === 'production');
let baseUrl = isDev ? 'http://127.0.0.1:3000/api' : 'http://127.0.0.1:3000/api';
let publicPath = isDev ? '/_nuxt/' : '/_nuxt/';

module.exports = {
  srcDir: __dirname,
  head: {
    title: 'chenxiblog',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover'},
      {hid: 'description', name: 'description', content: 'chenxiblog'},
      {name:"format-detection",content:"telephone=no"},
      {name: "keywords", content: "chenxiblog"},
      {name: "author", content: "chenxi195"}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/img/fav.ico'}
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css',
    {src: '~/assets/css/global.less', lang: 'less'}
  ],
  loading: {
    color: '#66cb8c'
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: baseUrl,
    browserBaseURL: "/api"
  },
  build: {
    extractCSS: true,
    // CDN 地址, 当运行 nuxt build 时，会将.nuxt/dist/目录的内容上传到CDN， '/_nuxt/'为默认值
    publicPath: publicPath,
    maxChunkSize: 500000,
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
  plugins: [
    '~plugins/element-ui',
    '~/plugins/prototype',
    { src: '~plugins/nuxt-quill-plugin.js', ssr: false }
  ]
}
