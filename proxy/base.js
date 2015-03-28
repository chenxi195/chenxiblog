/**
 * Created by think on 2014/8/26.
 */
'use strict';
var EventEmitter = require("events").EventEmitter;
var util = require("util");
var Q = require('q');

/**
 * @class 所有代理类基类 BaseProxy
 * @constructor
 * ```
 * - get:function(id, options, callback){}  //根据Id获取单条记录
 * - fetchOne: function(option, callback) //获取单条记录
 * - fetchAll: function(options, callback) //获取所有记录
 * - paginate: function(query, options, callback)   //对Query进行分页
 * - listAndPaginate: function(options, callback)   //分页显示
 * - save :function(model, callback) //保存   emit("save",model);
 * - update : function(id, update, callback) //修改 emit("update",model):
 * - remove: function(id, callback) //删除  emit("remove",model);
 * ```
 */
function BaseProxy(model) {
    EventEmitter.call(this);
    this.model = model;
}
util.inherits(BaseProxy, EventEmitter); //BaseProxy继承于EventEmitter

/**
 * 新建记录
 * @param model {Object}
 * @param callback
 */
BaseProxy.prototype.add = function (model, callback) {
    var defer = Q.defer(),
        obj = this;
    if (!(model instanceof this.model)) {
        model = new this.model(model);
    }
    this.model.create(model, function (err, model) {
        if (!err) {
            obj.emit("add", model);
            defer.resolve(model);
        } else {
            defer.reject(err);
        }
//        callback(err, model);
    });
    return defer.promise.nodeify(callback);
};

/**
 * 保存记录
 * @param model {Object}
 * @param callback
 */
BaseProxy.prototype.save = function (model, callback) {
    var obj = this,
        defer = Q.defer();

    if (!(model instanceof this.model)) {
        model = new this.model(model);
    }
    model.save(function (err, model) {
        if (!err) {
            obj.emit("save", model);
            defer.resolve(model);
        } else {
            defer.reject(err);
        }
//        callback(err, model);
    });
    return defer.promise.nodeify(callback);
};

/**
 * 通过Id获取model
 * @param id {ObjectId}
 * @param options {Object}
 *  - columns {Object} 获取那些列
 *  - populate {Array}
 * @param callback {function}
 * @example
 * ```
 * //查询线路ID为123456789,仅查询线路编号，并且渲染工作团队
 *  LineProxy.get("123456789", {columns: {lineNo:1},populate:[{path:"teamId", model:"Team", select:"_id name"}]}, function(err, line){
 *      console.info(line);
 *  });
 * ```
 */
BaseProxy.prototype.get = function (id, options, callback) {
    var defer = Q.defer();
    if (arguments.length === 2 && typeof options === 'function') {
        callback = options;
        options = null;
    }
    var columns = options && options.columns ? options.columns : null;
    var query = this.model.findById(id, columns);
    if (options && options.populate && options.populate.length) {
        for(var i=0;i<options.populate.length;i++) {
            query = query.populate(options.populate[i]);
        }
    }
    query.exec(function(err, result) {
        if (err) {
            defer.reject(err);
        } else {
            defer.resolve(result);
        }
    });

    return defer.promise.nodeify(callback);
};

/**
 * 获取一条
 * @param options {Object}
 *  - condition
 *  - populate
 *  - columns
 *  - opts
 * @param callback
 */
BaseProxy.prototype.fetchOne = function(options, callback) {
    var defer = Q.defer();
    if (!options) {
        options = {};
    }
    var columns = options.columns ? options.columns: null;
    var condition = options.condition;
    if (!condition && condition !== false){
        var err = new Error ("if not has query condition, please set condition false");
        defer.reject(err);
//        return callback(err);
    } else {
        condition = condition? options.condition:null;
        var opts = options.opts || {};
        var sort = options.sort ? options.sort : null;
        if (sort){
            if (sort.sort) {
                opts.sort = sort.sort;
            }  else {
                opts.sort = sort;
            }
        }
        var populate = options.populate ? options.populate : false;
        var query = this.model.findOne(condition, columns, opts);
        if (populate && populate.length) {
            for(var i=0;i<options.populate.length;i++) {
                query = query.populate(options.populate[i]);
            }
        }
        query.exec(function(err, result) {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(result);
            }
        });
    }
    return defer.promise.nodeify(callback);
};

/**
 * 获取全部记录
 * @param options {Object}
 *  - condition
 *  - columns
 *  - opts
 *  - populate
 * @param callback
 */
BaseProxy.prototype.fetchAll = function(options, callback) {
    var defer = Q.defer();
    if (!options) {
        options = {};
    }
    var columns = options.columns ? options.columns: null;
    var condition = options.condition;
    if (!condition && condition !== false){
        var err = new Error ("if not has query condition, please set condition false");
        defer.reject(err);
//        return callback(err);
    } else {
        condition = condition? options.condition:null;
        var opts = options.opts || {};
        var sort = options.sort ? options.sort : null;
        if (sort){
            if (sort.sort) {
                opts.sort = sort.sort;
            }  else {
                opts.sort = sort;
            }
        }
        var populate = options.populate ? options.populate : false;
        var query = this.model.find(condition, columns, opts);
        if (populate && populate.length) {
            for(var i=0;i<options.populate.length;i++) {
                query = query.populate(options.populate[i]);
            }
        }
        query.exec(function(err, result) {
            if(err) {
                defer.reject(err);
            } else {
                defer.resolve(result);
            }
        });
    }
    return defer.promise.nodeify(callback);
};

/**
 * 通过id删除
 * @param id {ObjectId}
 * @param callback
 */
BaseProxy.prototype.remove = function(id, callback) {
    var obj = this,
        defer = Q.defer();
    this.model.findByIdAndRemove(id, function(err, model){
        if (!err) {
            obj.emit("remove", model);
            defer.resolve(model);
        } else {
            defer.reject(err);
        }
//        callback(err, model);
    });
    return defer.promise.nodeify(callback);
};

BaseProxy.prototype.removeAll = function(condition, callback) {
    var obj = this,
        defer = Q.defer();
    this.model.remove(condition, function(err, removes) {
        if (!err) {
            obj.emit("removeAll", removes);
            defer.resolve(removes);
        } else {
            defer.reject(err);
        }
//        callback(err, removes);
    });
    return defer.promise.nodeify(callback);
};

/**
 * 更新
 * @param id {ObjectId}
 * @param update {Object}
 * @param callback
 */
BaseProxy.prototype.update = function(id, update, callback) {
    var obj = this,
        defer = Q.defer();
    obj.model.findByIdAndUpdate(id, update, function(err, model) {
        if (!err) {
            obj.emit("update", model);
            defer.resolve(model);
        } else {
            defer.reject(err);
        }
//        callback(err, model);
    });
    return defer.promise.nodeify(callback);
};


BaseProxy.prototype.updateAll = function(condition, update, options, callback) {
    var obj = this,
        defer = Q.defer();
    var mutilUpdate = options.mutilUpdate || false;
    obj.model.update(condition, update, null, mutilUpdate, function(err, result) {
        if (!err) {
            obj.emit("updateAll", result);
            defer.resolve(result);
        } else {
            defer.reject(err);
        }
    });
    return defer.promise.nodeify(callback);
}

/**
 * 分页
 * @param options {Object}
 *  - condition {Object}
 *  - populate {Array}
 *  - columns {Object}
 *  - opts {Object}
 *      - sort
 *      - skip
 *      - limit
 *  - page {Number}
 *  - perPage {Number}
 * @param callback {function}
 */
BaseProxy.prototype.listAndPaginate = function(options, callback) {
    var obj = this,
        defer = Q.defer();
    var columns = (options && options.columns) ? options.columns : null;
    var opts = options.opts || {};
    var sort = (options && options.sort) ? options.sort : null;
    if (sort) {
        if (sort.sort) {
            opts.sort = sort.sort;
        } else {
            opts.sort = sort;
        }
    }
    var populate = options && options.populate ? options.populate : false;
    var condition = options;
    if (!condition && condition !== false){
        var err = new Error ("if not has query condition, please set condition false");
        defer.reject(err);
//        return callback(err);
    } else {
        condition = condition? options.condition:null;
        var page = options && options.page ? options.page :1;
        var perPage = options && options.perPage ? options.perPage :10;
        var query = this.model.find(condition, columns, opts);
        if (populate && populate.length) {
            for(var i=0;i<populate.length;i++) {
                query = query.populate(populate[i]);
            }
        }
        console.log('xxxxxxxxx')
        console.log(this)
        this.paginate(query, {page:page, perPage:perPage}, function(err, result) {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(result);
            }
        });
    }
    return defer.promise.nodeify(callback);
};


/**
 * 分页
 * @param query {Query}
 * @param options {Object}
 * @param callback {function}
 */
BaseProxy.prototype.paginate = function (query, options, callback) {
  var obj = this,
    defer = Q.defer();
  console.log('xxxxxx')
  console.log(query)
  query.paginate(options, function(err, result) {
    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(result);
    }
  });
  return defer.promise.nodeify(callback);
};

/**
 * @param distinctColumns
 * @param options
 * @param callback
 * @returns {*}
 */
BaseProxy.prototype.distinct = function(distinctColumns, options, callback) {
    var defer = Q.defer();
    if (!options) {
        options = {};
    }
    var condition = options.condition;
    if (!condition && condition !== false){
        var err = new Error ("if not has query condition, please set condition false");
        defer.reject(err);
//        return callback(err);
    } else {
        condition = condition? options.condition:null;
        this.model.distinct(distinctColumns, condition, function(err, result) {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(result);
            }
        });
    }
    return defer.promise.nodeify(callback);
};

/**
 * 根据条件计算条数
 * @param condition 查询条件
 * @param callback
 */
BaseProxy.prototype.count = function(condition, callback) {
    var obj = this,
        defer = Q.defer();
    this.model.count(condition, function(err, count) {
        if (!err) {
            obj.emit("count", count);
            defer.resolve(count);
        } else {
            defer.reject(err);
        }
//        callback(err, removes);
    });
    return defer.promise.nodeify(callback);
};

/**
 * 用于简化代理的声明
 * @param model
 * @returns {ProxyClass}
 *
 * @example
 * ```
 *  var Line = require("../models").Line,
 *      BaseProxy = require("./base").BaseProxy,
 *      LineProxy = BaseProxy.factory(Line);
 *  module.exports = new LineProxy();
 * ```
 */
BaseProxy.factory = function(model) {
    function ProxyClass() {
        BaseProxy.call(this, model);
    }
    util.inherits(ProxyClass, BaseProxy);
    return ProxyClass;
}

module.exports = BaseProxy;
module.exports.BaseProxy = BaseProxy;