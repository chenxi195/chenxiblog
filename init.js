const sequelize = require('./db/_db').sequelize();

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(e => {
    console.error('Unable to connect to the database:', e);
  });

const Page = sequelize.import('./db/page/pagemodel');

console.log('NODE_ENV: ', process.env.NODE_ENV);

sequelize.sync({force: true})
  .then(rs => {
    console.log('sequelize sync success');
    process.exit();
  })
  .catch(e => {
    console.error(e);
    process.exit();
  });