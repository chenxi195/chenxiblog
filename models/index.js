var mongoose = require('mongoose');
require('../proxy/query-paginate');
function loadModel(modelName) {
  return mongoose.model(modelName);
}
exports.loadModel = loadModel;

require('./article');
require('./profile');

exports.Article = loadModel("Article");
exports.Profile = loadModel("Profile");