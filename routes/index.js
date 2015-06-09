
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
router.get('/postList',  controller.postList);
router.get('/postInfo',  controller.postInfo);
router.get('/userList', controller.userList);
router.get('/jobType', controller.jobType);
router.get('/userDetail', controller.userDetail);



module.exports = router;