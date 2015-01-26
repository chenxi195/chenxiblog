/**
 * Created by chenxi on 14-7-28.
 */
'use strict';

var ProfileProxy = require("../proxy/profile").ProfileProxy;


function indexView(req, res, next) {
    res.render('index', { title: 'chenxiblog' });
}

function aboutView(req, res, next) {
    res.render('about', { title: 'about' });
}

function materialView(req, res, next) {
    res.render('material', { title: 'material' });
}

exports.indexView = indexView;
exports.aboutView = aboutView;
exports.materialView = materialView;