
/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();

router.get('/getInfo',  function(req, res, next) {
  res.json({
    title: 'chenxiblog'
  })
});


module.exports = router;