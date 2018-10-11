let isDev = !(process.env.NODE_ENV === 'production');

let config = {
  db: {
    username: 'root',
    host: 'localhost',
    port: '3306',
    password: null,
    database: 'chenxiblog',
    dialect: 'mysql'
  },
  session: {
    password: 'ChenxiblogPWD123'
  },
  qiniu: {
    accessKey: 'g0-5YUfvhKhBl9M2CdjgP0d-eNpobBPiJxLINlSt',
    secretKey: 'sbZMwukT8jO9IQFXoAZmfXgtQbRM1sWmZrUnRN6b',
    domain: isDev ? 'http://pgd2fb33r.bkt.clouddn.com' : 'http://qn.chenxiblog.com',
    bucket: 'chenxi195'
  }
};
module.exports = config;