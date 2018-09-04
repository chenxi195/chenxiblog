/*
 * 操作数据库基础方法的封装
 * 参考文档地址：
 * http://docs.sequelizejs.com/manual/tutorial/models-usage.html
 * http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

const Paginate = require('./_paginator');
const {successJson, errorJson} = require("../util");
function BaseClass(model) {
    this.model = model;
}

/*
 * 插入单条数据
 * @params(Object) 数据对象
 * @options(Object) 可选
 */
BaseClass.prototype.create = function(params, options) {
  let self = this;
    return new Promise((resolve, reject) => {
      self.model.create(params, options||{})
        .then(rs => {
          resolve(successJson(rs));
        })
        .catch(e => {
          resolve(errorJson(e.message));
        })
    });
};

/*
 * 根据条件查找单条数据
 * @params(Object) 查询条件{where, attribute ...}
 */
BaseClass.prototype.findOne = function(params){
  let self = this;
  return new Promise((resolve, reject) => {
    self.model.findOne(params)
      .then(rs => {
        resolve(successJson(rs));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      })
  });
};

/*
 * 根据id查找数据
 * @id (String,Number)
 */
BaseClass.prototype.findById = function(id){
  let self = this;
  return new Promise((resolve, reject) => {
    self.model.findById(id)
      .then(rs => {
        resolve(successJson(rs));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      })
  });
};

/*
 * 查找多条数据
 * @params(Object) 查询条件
 */
BaseClass.prototype.findAll = function(params){
  let self = this;
  return new Promise((resolve, reject) => {
    self.model.findAll(params)
      .then(rs => {
        resolve(successJson(rs));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      })
  });
};

/*
 * 更新数据
 * @values(Object) 更新数据对象
 * @options(Object) 查询条件{where...}
 */
BaseClass.prototype.update = function(values, options){
  let self = this;
  return new Promise((resolve, reject) => {
    if(!options.where){
      options = {where:options};
    }
    self.model.update(values, options)
      .then(rs => {
        resolve(successJson(rs));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      })
  });
};

/*
 * 按Id更新单条数据
 * @id (String, Number) 更新对象的Id
 * @update (Object)  更新内容
 * @options (Object)  可选
 */
BaseClass.prototype.updateById = function(id, update, options){
  let self = this;

  return new Promise((resolve, reject) => {
    let opts = {};
    if(options){
      opts = options;
    }
    if(!opts.where){
      opts.where = {};
    }
    opts.where[self.model.primaryKeyField] = id;
    opts.limit = 1;
    self.model.update(update, opts)
      .then(rs => {
        resolve(successJson(rs));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      });
  });
};

/*
 * 数据量
 * @param options 可选
 */

BaseClass.prototype.count = function(options){
  let self = this;

  return new Promise((resolve, reject) => {
    let opts = {};
    if(!options.where){
      opts.where = options;
    } else {
      opts = options
    }
    self.model.count(opts)
      .then(rs => {
        resolve(successJson(rs));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      });
  });
};

/**
 * 分页查询
 * @options(Object)  {
 *  where:{Object},
 *  page: 1,
 *  perPage: 15,
 *  order: {Object}
 * }
 */
BaseClass.prototype.paginate = function(options) {
  let self = this;
  let where = options.where || {};
  let page = options.page > 0 ? options.page : 1;
  let perPage = options.perPage > 0 ? options.perPage : 10;
  let skip = (page - 1) * perPage;
  let opts = {where:where, limit:perPage, offset:skip};

  // if(options.raw !== false){
  //   opts.raw = true;
  // }

  if(options.order){
    opts.order = options.order;
  }
  if(options.attributes){
    opts.attributes = options.attributes;
  }
  if(options.include){
    opts.include = options.include;
  }

  return new Promise((resolve, reject) => {
    self.model.findAndCountAll(opts)
      .then(rs => {
        let paginate = new Paginate(page, perPage, rs.count, rs.rows);
        resolve(successJson(paginate));
      })
      .catch(e => {
        resolve(errorJson(e.message));
      })
  })
}


module.exports = BaseClass;
