
/*
 * GET home page.
 */
var express = require('express');
var router = express();
var profile = require('../controllers');


router.get('/',  profile.indexView);
router.get('/index',  profile.indexView);
router.get('/about',  profile.aboutView);
router.get('/material',  profile.materialView);

module.exports = router;