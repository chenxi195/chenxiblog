/**
 * Created by chenxi on 14-7-28.
 */
'use strict';

var ProfileProxy = require("../proxy/profile").ProfileProxy;
var ArticleProxy = require("../proxy/article").ArticleProxy;

function adminView(req, res ,next){
  res.render('admin/index', { title: 'Admin Manager', layout: 'admin/inc/layout.html', select: 'index'});
}

function profiles(req, res, next){
  res.render('admin/profiles', { title: 'Admin Manager', layout: 'admin/inc/layout.html', select: 'profile'});
}

function profile(req, res, next){
  var id = req.params.id;
  res.render('admin/profile', { title: 'Admin Manager', layout: 'admin/inc/layout.html', select: 'profile'});
}

function profileAction(req, res, next){
  var body = req.body;
  ProfileProxy.add(body)
    .then(function(result){
      res.locals.success = '创建成功';
      res.render('admin/profile', { title: 'Admin Manager', layout: 'admin/inc/layout.html', profile: result, select: 'profile'});
    }).catch(next).done();
}

function articles(req, res, next){
  res.render('admin/articles', { title: 'Admin Manager', layout: 'admin/inc/layout.html', select: 'article'});
}

function article(req, res, next){
  res.render('admin/article', { title: 'Admin Manager', layout: 'admin/inc/layout.html', select: 'article'});
}

function articleAction(req, res, next){
  res.render('admin/article', { title: 'Admin Manager', layout: 'admin/inc/layout.html', select: 'article'});
}

exports.adminView = adminView;
exports.profiles = profiles;
exports.profile = profile;
exports.profileAction = profileAction;
exports.articles = articles;
exports.article = article;
exports.articleAction = articleAction;