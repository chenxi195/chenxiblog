/**
 * Created by chenxi on 15-3-26.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

/**
 *  文章类
 *
 * @Article {Schema}
 *
 * @title {String} 标题
 * @content {String} 文章内容
 * @summary {String} 文章摘要
 * @coverPicture {String} 封面图
 * @type {ObjectId} 文章类型 1 后端类文章 2 前端类文章 3 设计类文章 4 自己项目相关 5 其他
 * @createAt {Date} 创建时间
 * @isTop {Boolean} 是否置顶
 * @isShow {Boolean} 是否显示
 */
var Article = new Schema({
  title: {
    type: String,
    index: true
  },
  content:{
    type: String
  },
  summary: {
    type: String
  },
  coverPicture: {
    type: String
  },
  "type": {
    type: Number,
    default: 1,
    index: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  isTop: {
    type:Boolean,
    default:false
  },
  isShow:{
    type:Boolean,
    default: true
  }
});

mongoose.model('Article', Article);