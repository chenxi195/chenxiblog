const path = require('path');
const util = require('util');
const sequelize = require('../_db').sequelize();
const ZpModel = sequelize.import(path.join(__dirname, './zpmodel'));
const BaseClass = require('../_baseClass');

let Zp = function () {
  BaseClass.call(this, ZpModel);
};

util.inherits(Zp, BaseClass);

module.exports = new Zp();
