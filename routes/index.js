/*
 * GET home page.
 */
const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/getPageList',  controller.getPageList);
router.post('/setPageTop',  controller.setPageTop);
router.post('/cancelPageTop',  controller.cancelPageTop);
router.post('/createOrSavePage',  controller.saveOrUpdatePage);
router.post('/deletePage',  controller.deletePage);


module.exports = router;