// let isDev = !(process.env.NODE_ENV === 'production');

let config = {
  db: {
    username: 'root',
    host: 'localhost',
    password: null,
    database: 'chenxiblog',
    dialect: 'mysql'
  },
  session: {
    password: 'ChenxiblogPWD123'
  }
};

module.exports = config;