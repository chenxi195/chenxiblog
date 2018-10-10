const qiniu = require('qiniu');
const qiniuConfig = require('../config').qiniu;
const errorJson = (str)=>Object({success:false, message: str || '请求失败', description: str || '请求失败', code: '0'});
const successJson = (data, str)=>Object({success:true, message: str || '请求成功', description: str || '请求成功', data: data, code: '1'});
const getDownloadUrl = (key) => {
  let accessKey = qiniuConfig.accessKey;
  let secretKey = qiniuConfig.secretKey;
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  let config = new qiniu.conf.Config();
  let bucketManager = new qiniu.rs.BucketManager(mac, config);
  let publicBucketDomain = qiniuConfig.domain;
  let publicDownloadUrl = bucketManager.publicDownloadUrl(publicBucketDomain, key);
  return publicDownloadUrl;
};
const getUpToken = (key) => {
  let accessKey = qiniuConfig.accessKey;
  let secretKey = qiniuConfig.secretKey;
  let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
  let options = {
    scope: key ? `${qiniuConfig.bucket}:${key}` : qiniuConfig.bucket,
  };
  let putPolicy = new qiniu.rs.PutPolicy(options);
  let uploadToken=putPolicy.uploadToken(mac);
  return uploadToken;
};
module.exports = {
  errorJson,
  successJson,
  getDownloadUrl,
  getUpToken
};
