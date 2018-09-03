/*
 * GET home page.
 */
const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.get('/getPageList',  controller.getPageList);
router.get('/getFrontFirstPage',  controller.getFrontFirstPage);
router.post('/setPageTop',  controller.setPageTop);
router.post('/cancelPageTop',  controller.cancelPageTop);
router.post('/createOrSavePage',  controller.saveOrUpdatePage);
router.post('/deletePage',  controller.deletePage);
router.post('/loginSubmit',  controller.loginSubmit);


module.exports = router;