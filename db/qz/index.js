const path = require('path');
const util = require('util');
const sequelize = require('../_db').sequelize();
const QzModel = sequelize.import(path.join(__dirname, './qzmodel'));
const BaseClass = require('../_baseClass');

let Qz = function () {
  BaseClass.call(this, QzModel);
};

util.inherits(Qz, BaseClass);

module.exports = new Qz();
