
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes/index');
var admin = require('./routes/admin');
var http = require('http');
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var ejsLayout = require('express-ejs-layouts');
var app = express();


//require('./db/mongo');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use(ejsLayout);
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use('/', routes);
app.use('/admin', admin);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//run server
if (require('os').platform() === 'linux') {
    if (fs.existsSync(path.join(__dirname, 'tmp'))) {
    } else {
        fs.mkdirSync(path.join(__dirname, 'tmp'), '777');
    }
    var server = http.createServer(app);
    server.listen('tmp/chenxiblog.socket', function (err) {
        if (err) {
            throw err;
        } else {
            //修改文件权限
            setTimeout(function(){
                fs.chmod('tmp/chenxiblog.socket', '777', function(err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log('server start' );
                    }
                });
            }, 1000);
        }
    });
} else {
    var server = http.createServer(app);
    server.listen(3000, function (err) {
        if (err) {
            throw err;
        } else {
            console.log("server start on 3000 ...")
        }
    });
}