var express = require('express');
var router = express();
var profile = require('../controllers');

router.get('/',   function (req, res, next) {
  res.render("admin/index", {layout: "admin/inc/layout", title: "管理首页"});
});

module.exports = router;