const Sequelize = require('sequelize');
const dbConfig = require('../config').db;

exports.sequelize = () => {
  let sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      underscored: true, //库中属性禁用驼峰命名
      timestamps: true, //增加updateAt, createAt, deleteAt等时间戳字段
      freezeTableName: false, //自定义表名，如不设置会将define的第一个参数变成复数作为表名
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    }
  });

  if(!global.Sequelize){
    global.Sequelize = sequelize;
  }

  return sequelize;
}