const errorJson = (str)=>Object({success:false, message: str || '请求失败', description: str || '请求失败', code: '0'});
const successJson = (data, str)=>Object({success:true, message: str || '请求成功', description: str || '请求成功', data: data, code: '1'});

module.exports = {
  errorJson,
  successJson
}
