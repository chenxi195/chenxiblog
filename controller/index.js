const pageProxy = require('../db/page');
const setPageTitle = (req, res, next) => {
  let body = req.body;
  pageProxy.create({title: body.title})
    .then(rs => {
      res.json(rs)
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

  if(query.text){
    params.where.title = {
      [Sequelize.Op.like]: `%${query.text}%`
    }
  }
  if(query.type){
    params.where.type = query.type;
  }

  pageProxy.paginate(params)
    .then(rs => {
      res.json(rs);
    })
}

module.exports = {
  setPageTitle,
  getPageList
}
