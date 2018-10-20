const path = require('path');
const util = require('util');
const sequelize = require('../_db').sequelize();
const CzModel = sequelize.import(path.join(__dirname, './czmodel'));
const BaseClass = require('../_baseClass');

let Cz = function () {
  BaseClass.call(this, CzModel);
};

util.inherits(Cz, BaseClass);

module.exports = new Cz();
