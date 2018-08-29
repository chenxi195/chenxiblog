/*
 * 操作数据库基础方法的封装
 */

const Paginate = require('./_paginator');
const errorJson = (str)=>Object({success:false, message: str || '请求失败', description: str || '请求失败', code: '0'});
const successJson = (data, str)=>Object({success:true, message: str || '请求成功', description: str || '请求成功', data: data, code: '1'});

function BaseClass(model) {
    this.model = model;
}

/*
 * 插入单条数据
 * @param options 可选
 * @param model 数据对象
 * reutrn promise
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

/**
 * 分页查询
 * @param options {
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
  let perPage = options.perPage > 0 ? options.perPage : 15;
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
