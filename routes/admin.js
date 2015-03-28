var express = require('express');
var router = express();
var admin = require('../controllers/admin');

router.get('/', admin.adminView);
router.get('/index', admin.adminView);
router.get('/profiles', admin.profiles);
router.get('/profile/:id', admin.profile);
router.post('/profile', admin.profileAction);
router.get('/articles', admin.articles);
router.get('/article/:id', admin.article);

module.exports = router;