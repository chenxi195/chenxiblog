const pageProxy = require('../db/page');
const sessionConfig = require('../config').session;
const {successJson, errorJson} = require("../util");
const path = require('path');
const fs = require('fs');

const setPageTop = (req, res, next) => {
  let body = req.body;
  if(!body.id){
    return res.json(errorJson('文章id缺失'))
  }
  pageProxy.updateById(body.id, {top: 2})
    .then(rs => {
      res.json(rs)
    })
};

const cancelPageTop = (req, res, next) => {
  let body = req.body;
  if(!body.id){
    return res.json(errorJson('文章id缺失'))
  }
  pageProxy.updateById(body.id, {top: 1})
    .then(rs => {
      res.json(rs)
    })
};

const saveOrUpdatePage = (req, res, next) => {
  let body = req.body;
  let model = {};

  if(!body.title){
    return res.json(errorJson('文章title缺失'))
  }
  if(!body.summary){
    return res.json(errorJson('文章summary缺失'))
  }
  if(!body.content){
    return res.json(errorJson('文章content缺失'))
  }

  model.title = body.title;
  model.summary = body.summary;
  model.content = body.content;
  model.type = body.type || 1;

  if(body.id){
    pageProxy.updateById(body.id, model)
      .then(rs => {
        res.json(rs);
      })
  }else{
    pageProxy.create(model)
      .then(rs => {
        res.json(rs);
      })
  }

};

const getBaseInfo = (req, res, next) => {
  Promise.all([
    pageProxy.count({where: {status: 1}}),
    pageProxy.count({where: {status: 1, type: 1}}),
    pageProxy.count({where: {status: 1, type: 2}}),
    pageProxy.count({where: {status: 1, type: 3}}),
    pageProxy.count({where: {status: 1, type: 4}})
  ])
    .then(rs => {
      let obj = {};
      let countArr = [];
      let percentArr = [];
      rs.forEach((item, index) => {
        countArr[index] = item.data;
      });
      countArr.forEach((item, index) => {
        percentArr[index] = Math.floor((item/countArr[0])*100);
      });
      obj.countArr = countArr;
      obj.percentArr = percentArr;
      // obj.type1Count = rs[0].data;
      // obj.type2Count = rs[1].data;
      // obj.type3Count = rs[2].data;
      // obj.type4Count = rs[3].data;
      // obj.allCount = rs[4].data;
      res.json(successJson(obj));
    })
};

const getTopPage = (req, res, next) => {
  pageProxy.findOne({
    where: {status: 1, top: 2},
    attributes: ['id', 'created_at', 'summary', 'title']
  })
    .then(rs => {
      res.json(rs);
    })
};

const getPageList = (req, res, next) => {
  let query = req.query;
  let params = {
    page: query.page || 1,
    perPage: query.perPage || 10,
    where: {},
    order: [['id', 'ASC']]
  };

  if(req.originalUrl.indexOf('/api/getAdminPageList') > -1) {
    params.attributes = ['id', 'created_at', 'summary', 'title', 'content', 'top'];
  }else{
    params.attributes = ['id', 'created_at', 'summary', 'title'];
  }

  if(query.title){
    params.where.title = {
      [Sequelize.Op.like]: `%${query.title}%`
    }
  }
  if(query.type && query.type !== 'ALL'){
    params.where.type = query.type;
  }
  if(query.time && query.time[0] && query.time[1]){
    params.where['created_at'] = {
      [Sequelize.Op.gte]: query.time[0],
      [Sequelize.Op.lte]: query.time[1]
    }
  }
  if(query.top){
    params.where.top = query.top;
  }
  params.where.status = query.status || 1;

  pageProxy.paginate(params)
    .then(rs => {
      if(req.originalUrl.indexOf('/api/m/getPageList') > -1){
        res.jsonp(rs); //提供给小程序调用
      }else{
        res.json(rs);
      }
    })
};

const getPageItem = (req, res, next) => {
  let id = req.query.id;

  if(!id){
    return res.json(errorJson('文章id缺失'));
  }
  pageProxy.findById(id)
    .then(rs => {
      res.json(rs);
    })

};

const deletePage = (req, res, next) => {
  let body = req.body;
  if(!body.id){
    return res.json(errorJson('文章id缺失'))
  }
  //属相删除，非物理删除
  pageProxy.updateById(body.id, {status: 2})
    .then(rs => {
      res.json(rs)
    })
};

const loginSubmit = (req, res, next) => {
  const pwd = req.body.password;
  const sessionPassword = sessionConfig.password;

  if(pwd === sessionPassword){
    req.session.userPWD = sessionPassword;
    res.json(successJson('登录成功!'))
  }else{
    res.json(errorJson('登录失败，密码错误'));
  }
};

const getResume = (req, res, next) => {
  let url = path.join(__dirname, '../util/doc/a.doc');
  fs.createReadStream(url).pipe(res);
};



module.exports = {
  setPageTop,
  getPageList,
  saveOrUpdatePage,
  deletePage,
  cancelPageTop,
  loginSubmit,
  getTopPage,
  getBaseInfo,
  getPageItem,
  getResume
};
