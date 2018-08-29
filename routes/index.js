/*
 * GET home page.
 */
const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/getInfo',  function(req, res, next) {
  res.json({
    title: 'chenxiblog'
  })
});

router.get('/setPageTitle',  controller.setPageTitle);
router.get('/getPageList',  controller.getPageList);


module.exports = router;