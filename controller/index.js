const pageProxy = require('../db/page');
const errorJson = (str)=>Object({success:false, message: str || '请求失败', description: str || '请求失败', code: '0'});

const setPageTop = (req, res, next) => {
  let body = req.body;
  if(!body.id){
    return res.json(errorJson('文章id缺失'))
  }
  pageProxy.updateById(body.id, {top: true})
    .then(rs => {
      res.json(rs)
    })
};

const cancelPageTop = (req, res, next) => {
  let body = req.body;
  if(!body.id){
    return res.json(errorJson('文章id缺失'))
  }
  pageProxy.updateById(body.id, {top: false})
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
  if(!body.content){
    return res.json(errorJson('文章content缺失'))
  }

  model.title = body.title;
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

const getPageList = (req, res, next) => {
  let query = req.query;
  let params = {
    page: query.page || 1,
    perPage: query.perPage || 15,
    where: {},
    order: [['id', 'ASC']]
  };

  if(query.text){
    params.where.title = {
      [Sequelize.Op.like]: `%${query.text}%`
    }
  }
  if(query.type && query.type !== 'ALL'){
    params.where.type = query.type;
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



module.exports = {
  setPageTop,
  getPageList,
  saveOrUpdatePage,
  deletePage,
  cancelPageTop
}
