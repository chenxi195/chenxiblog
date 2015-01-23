
/*
 * GET home page.
 */
var express = require('express');
var router = express();
var profile = require('../controllers');


router.get('/',  profile.indexView);
router.get('/index',  profile.indexView);

module.exports = router;

//exports.index = function(req, res){
//  res.render('index', { title: 'chenxiblog' });
//};
//
//exports.about = function(req, res){
//    res.render('about2', { title: 'about' });
//};
//
//exports.material = function(req, res){
//    res.render('material', { title: 'material' });
//}