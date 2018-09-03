const pageProxy = require('../db/page');
const sessionConfig = require('../config').session;
const {successJson, errorJson} = require("../util");

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
    pageProxy.count({where: {status: 1, type: 1}}),
    pageProxy.count({where: {status: 1, type: 2}}),
    pageProxy.count({where: {status: 1, type: 3}}),
    pageProxy.count({where: {status: 1, type: 4}}),
    pageProxy.count({where: {status: 1}})
  ])
    .then(rs => {
      let obj = {};
      obj.type1Count = rs[0].data;
      obj.type2Count = rs[1].data;
      obj.type3Count = rs[2].data;
      obj.type4Count = rs[3].data;
      obj.allCount = rs[4].data;
      res.json(successJson(obj));
    })
};

const getFrontFirstPage = (req, res, next) => {
  let paginateParams = {
    page: 1,
    perPage: 10,
    where: {
      status: 1,
      top: 1
    },
    order: [['id', 'ASC']]
  };

  Promise.all([
    pageProxy.findOne({where: {status: 1, top: 2}}),
    pageProxy.paginate(paginateParams)
  ])
    .then(rs => {
      let obj = {};
      obj.topObj = rs[0].data;
      obj.paginate = rs[1].data;
      res.json(successJson(obj));
    })
};

const getPageList = (req, res, next) => {
  let query = req.query;
  let params = {
    page: query.page || 1,
    perPage: query.perPage || 15,
    where: {},
    order: [['id', 'ASC']]
  };

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



module.exports = {
  setPageTop,
  getPageList,
  saveOrUpdatePage,
  deletePage,
  cancelPageTop,
  loginSubmit,
  getFrontFirstPage,
  getBaseInfo
}
