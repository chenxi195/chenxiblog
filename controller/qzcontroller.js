const execSync = require('child_process').execSync;
const path = require('path');

const qzSubmit = (req, res, next) => {
  let a = execSync('phantomjs webpage.js');
  res.json({success:true})
};

module.exports = {
  qzSubmit,
};