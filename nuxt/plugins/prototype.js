import Vue from 'vue';
import moment from 'moment';

/*
 * 时间格式化
 * format 参考moment 格式
 * */
Vue.prototype.momentFormat = function (time, format) {
  format = format || 'YYYY-MM-DD HH:mm:ss';
  if (time) {
    return moment(time).format(format);
  }
  return moment().format(format);
};