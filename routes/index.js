
/*
 * GET home page.
 */
var express = require('express');
var router = express();
var controller = require('../controllers/front');


router.get('/',  controller.indexView);
router.get('/index',  controller.indexView);
router.get('/about',  controller.aboutView);
router.get('/material',  controller.materialView);



//wc
router.get('/list',  controller.wcList);
router.get('/postList',  controller.postList);



module.exports = router;