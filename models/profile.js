/**
 * Created by chenxi on 14-7-28.
 */
'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Profile = new Schema({
    /**
     * @property 姓名 name
     * @type {String}
     */
    name: {
        type: String
    },
    /**
     * @property 昵称 nickName
     * @type {String}
     */
    nickName: {
        type: String
    },
    /**
     * @property 性别 sex 1男 2女
     * @type {String} male female other
     */
    sex: {
        type: String
    },
    /**
     * @property 户籍地 oldCity
     * @type {String}
     */
    oldCity: {
        type: String
    },
    /**
     * @property 现居地 oldCity
     * @type {String}
     */
    nowCity: {
        type: String
    },
    /**
     * @property mobile 手机
     * @type {String}
     */
    mobile: {
        type: String
    },
    /**
     * @property email 邮箱
     * @type {String}
     */
    email: {
        type: String
    },
    /**
     * @property workDate 邮箱
     * @type {Number} 入职日期
     */
    workDate: {
        type: Number,
        default: Date.now
    },
    /**
     * @property work 工作
     * @type {String}
     */
    work: {
        type: String
    },
    /**
     * @property 公司
     * @type {String}
     */
    company: {
        type: String
    },
    /**
     * @property 公司官网
     * @type {String}
     */
    companyWebsite: {
        type: String
    },
    /**
     * @property 描述 description
     * @type {String}
     */
    description: {
        type: String
    },
    /**
     * @property 工作状态 workStatus
     * @type {String} 1在职 -1已离职
     */
    workStatus : {
        type:Number
    }
});
mongoose.model("Profile", Profile);