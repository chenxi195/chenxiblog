var express = require('express');
var router = express();
var admin = require('../controllers/admin');

router.get('/', admin.adminView);
router.get('/profile', admin.adminView);
router.post('/profile', admin.profileAction);

module.exports = router;