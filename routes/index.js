
/*
 * GET home page.
 */
var express = require('express');
var router = express.Router();
var controller = require('../controllers');


router.get('/',  controller.indexView);



module.exports = router;