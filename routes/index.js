/*
 * GET home page.
 */
const express = require('express');
const router = express.Router();
const controller = require('../controller');
const qzController = require('../controller/qzcontroller');

router.get('/getAdminPageList',  controller.getPageList);
router.get('/getPageList',  controller.getPageList);
router.get('/m/getPageList',  controller.getPageList);
router.get('/getPageItem',  controller.getPageItem);
router.get('/getBaseInfo',  controller.getBaseInfo);
router.get('/getTopPage',  controller.getTopPage);
router.get('/export/resume',  controller.getResume);
router.get('/getToken',  controller.getToken);
router.post('/setPageTop',  controller.setPageTop);
router.post('/cancelPageTop',  controller.cancelPageTop);
router.post('/createOrSavePage',  controller.saveOrUpdatePage);
router.post('/deletePage',  controller.deletePage);
router.post('/loginSubmit',  controller.loginSubmit);



// router.post('/qzSubmit',  qzController.qzSubmit);
router.get('/getQzlist',  qzController.getQzlist);
router.get('/getQzdetail',  qzController.getQzdetail);
router.get('/setMockData',  qzController.setMockData);
router.get('/getZplist',  qzController.getZplist);
router.get('/getZpdetail',  qzController.getZpdetail);
router.get('/getCzdetail',  qzController.getCzdetail);
router.get('/getCzlist',  qzController.getCzlist);
router.get('/getZpListByZsid',  qzController.getZpListByZsid);
router.post('/updateQzdetail',  qzController.updateQzdetail);
router.post('/updateCzdetail',  qzController.updateCzdetail);
router.post('/setZpData',  qzController.setZpData);
router.post('/updateZpdetail',  qzController.updateZpdetail);
router.post('/setCzData',  qzController.setCzData);

module.exports = router;