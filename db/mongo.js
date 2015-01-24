/**
 * Created by chenxi on 15-1-23.
 */
'use strict';
var mongoose = require('mongoose');

mongoose.set('debug', true);
//链接数据库
mongoose.connect('mongodb://localhost/top_v2', function(err){
    if(err){
        console.log(err);
        process.exit(1);
    }
});