
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var expressSession = require('express-session');
var redis = require('redis');
var config = require('./config/config');
var fs = require('fs');
var http = require('http');
var routes = require('./routes/index');

var RedisStore = require('connect-redis')(expressSession);
var rClient = redis.createClient(config.redis.port, config.redis.host, {auth_pass: config.redis.auth_password});
var sessionStore = new RedisStore({client: rClient});

rClient.on("error", function (err) {
    console.log('redisError:'+err);
});


var app = express();

// view engine setup
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(favicon(path.join(__dirname, 'fav.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false,limit: '20488kb'}));
app.use(cookieParser());
// app.use(express.methodOverride());
app.use(expressSession({secret:"chenxi195", store: sessionStore,resave: true,saveUninitialized: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

// error handlers
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('result', {
        title: err.status,
        msg: err.message,
        success: false,
        error: err
    });
});


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('result', {
        title: err.status || 500,
        msg: err.message,
        success: false,
        error: err
    });
});

//run server
if (require('os').platform() === 'linux') {
    if (!fs.existsSync(path.join(__dirname, 'tmp'))) {
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
    var port = process.env.PORT || '3000';
    var server = http.createServer(app);

    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;

    console.log('Listening on ' + bind);
}