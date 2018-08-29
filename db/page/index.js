const path = require('path');
const util = require('util');
const sequelize = require('../_db').sequelize();
const PageModel = sequelize.import(path.join(__dirname, './pagemodel'));
const BaseClass = require('../_baseClass');

let Page = function () {
  BaseClass.call(this, PageModel);
};

util.inherits(Page, BaseClass);

module.exports = new Page();
