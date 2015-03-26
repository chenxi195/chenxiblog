/**
 * Created by chenxi on 14-7-28.
 */
'use strict';

var ProfileProxy = require("../proxy/profile").ProfileProxy;
var ArticleProxy = require("../proxy/article").ArticleProxy;

function indexView(req, res, next) {
  res.render('front/index', { title: 'chenxiblog', layout: 'front/inc/layout.html'});
}

function aboutView(req, res, next) {
  res.render('about', { title: 'about', layout: 'front/inc/layout.html'});
}

function materialView(req, res, next) {
  res.render('material', { title: 'material', layout: 'front/inc/layout.html'});
}


exports.indexView = indexView;
exports.aboutView = aboutView;
exports.materialView = materialView;