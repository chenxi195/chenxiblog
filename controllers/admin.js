/**
 * Created by chenxi on 14-7-28.
 */
'use strict';

var ProfileProxy = require("../proxy/profile").ProfileProxy;
var ArticleProxy = require("../proxy/article").ArticleProxy;

function adminView(req, res ,next){
  res.render('admin/index', { title: 'Admin Manager', layout: 'admin/inc/layout.html'});
}

function profileAction(req, res, next){
  var body = req.body;
  ProfileProxy.add(body)
    .then(function(result){
      res.locals.success = '创建成功';
      res.render('admin/index', { title: 'Admin Manager', layout: 'admin/inc/layout.html', profile: result});
    }).catch(next).done();

  console.log(body)

}

exports.adminView = adminView;
exports.profileAction = profileAction;