const execSync = require('child_process').execSync;
const path = require('path');
const {successJson, errorJson} = require("../util");

const qzSubmit = (req, res, next) => {
  let a = execSync('phantomjs webpage.js');
  res.json({success:true})
};

const getQzdetail = (req, res, next) => {
  let url = req.query.url;
  url = decodeURIComponent(url);
  let qzdetailData = {
    id: 1,
    no: '1002020',
    url: url,
    title: '全景网__中国领先的图片库和图片素材网站',
    qztime: '2018-10-16 11:06:26 568',
    ip: '220.181.111.188',
    beian: '渝ICP备10202274-4号',
    browser: '谷歌浏览器v.180926',
    imgUrl: '',
    status: '保全中',
    zjname: '',
    desc: ''
  };
  if(url.indexOf('quanjing.com') > -1){
    res.json(successJson(qzdetailData))
  }
};

module.exports = {
  qzSubmit,
  getQzdetail
};