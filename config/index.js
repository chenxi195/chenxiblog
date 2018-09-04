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
  }
};

let proConfig = {
  db: {
    username: 'root',
    host: '127.0.0.1',
    port: '3306',
    password: 'AD30c9013143',
    database: 'chenxiblog',
    dialect: 'mysql'
  },
  session: {
    password: 'ChenxiblogPWD123'
  }
};

module.exports = isDev ? config : proConfig;