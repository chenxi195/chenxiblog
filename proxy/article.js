/**
 * Created by chenxi on 15-1-9.
 */
'use strict';

var BaseProxy = require("./base").BaseProxy,
  Article = require("../models").Article,
  ArticleProxy = BaseProxy.factory(Article);

module.exports = new ArticleProxy();
module.exports.ArticleProxy = new ArticleProxy();