
/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();
var controller = require('../controllers');

router.get('/',  function(req, res, next) {
  res.render('index', { title: 'chenxiblog'});
});


module.exports = router;