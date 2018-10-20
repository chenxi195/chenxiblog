// const execSync = require('child_process').execSync;
// const path = require('path');
const qzProxy = require('../db/qz');
const zpProxy = require('../db/zp');
const czProxy = require('../db/cz');
const {successJson, errorJson} = require("../util");

// const qzSubmit = (req, res, next) => {
//   let a = execSync('phantomjs webpage.js');
//   res.json({success:true})
// };

const setMockData = (req, res, next) => {
  let model = {
    id: 1,
    no: '1002020',
    url: 'http://quanjing.com',
    title: '全景网__中国领先的图片库和图片素材网站',
    ip: '220.181.111.188',
    beian: '渝ICP备10202274-4号',
    browser: '谷歌浏览器v.180926',
    imgUrl: 'http://qn.chenxiblog.com/quanjing.png',
    status: '保全中',
    zjname: '',
    desc: ''
  };
  qzProxy.create(model)
    .then(rs => {
      res.json(rs);
    });

};

const getQzdetail = (req, res, next) => {
  // let url = req.query.url;
  // url = decodeURIComponent(url);
  // let qzdetailData = {
  //   id: 1,
  //   no: '1002020',
  //   url: url,
  //   title: '全景网__中国领先的图片库和图片素材网站',
  //   qztime: '2018-10-16 11:06:26 568',
  //   ip: '220.181.111.188',
  //   beian: '渝ICP备10202274-4号',
  //   browser: '谷歌浏览器v.180926',
  //   imgUrl: '',
  //   status: '保全中',
  //   zjname: '',
  //   desc: ''
  // };
  // if(url.indexOf('quanjing.com') > -1){
  //   res.json(successJson(qzdetailData))
  // }
  let id = req.query.id;
  qzProxy.findById(id)
    .then(rs =>{
      res.json(rs);
    });
};

const updateQzdetail = (req, res, next) => {
  let query = req.body;
  let model = {
    zjname: query.zjname,
    desc:query.desc
  };
  qzProxy.updateById(query.id, query)
    .then(rs =>{
      res.json(rs);
    })
};

const getQzlist = (req, res, next) => {
  qzProxy.findAll({})
    .then(rs =>{
      res.json(rs);
    })
};

const setZpData = (req, res, next) => {
  let query =req.body;
  zpProxy.create(query)
    .then(rs =>{
      res.json(rs);
    })
};
const getZplist = (req, res, next) => {
  zpProxy.findAll({})
    .then(rs =>{
      res.json(rs);
    })
};
const getZpListByZsid = (req, res, next) => {
  let no = req.query.zsid;
  zpProxy.findAll({where: {no: no}})
    .then(rs =>{
      res.json(rs);
    })
};

const updateZpdetail = (req, res, next) => {
  let query = req.body;
  zpProxy.updateById(query.id, query)
    .then(rs =>{
      res.json(rs);
    })
};

const getZpdetail = (req, res, next) => {
  let id = req.query.id;
  zpProxy.findById(id)
    .then(rs =>{
      res.json(rs);
    })
};


const setCzData = (req, res, next) => {
  let query =req.body;
  czProxy.create(query)
    .then(rs =>{
      res.json(rs);
    })
};
const getCzlist = (req, res, next) => {
  czProxy.findAll({})
    .then(rs =>{
      res.json(rs);
    })
};

const updateCzdetail = (req, res, next) => {
  let query = req.body;
  czProxy.updateById(query.id, query)
    .then(rs =>{
      res.json(rs);
    })
};

const getCzdetail = (req, res, next) => {
  let id = req.query.id;
  czProxy.findById(id)
    .then(rs =>{
      res.json(rs);
    })
};

module.exports = {
  // qzSubmit,
  getQzdetail,
  setMockData,
  updateQzdetail,
  getQzlist,
  setZpData,
  getZplist,
  updateZpdetail,
  getZpdetail,
  setCzData,
  getCzlist,
  updateCzdetail,
  getCzdetail,
  getZpListByZsid
};