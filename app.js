const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const sessionConfig = require('./config').session;
const routes = require('./routes/index');
const app = express();
const {Nuxt, Builder} = require('nuxt');
const {getDownloadUrl} = require('./util');
const compression = require('compression');

app.use(favicon(path.join(__dirname, 'fav.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({
  limit: '20488kb'
}));
app.use(bodyParser.urlencoded({ extended: false,limit: '20488kb'}));
app.use(cookieParser());
app.use(session({secret:"keyboard cat", resave: false, saveUninitialized: true, cookie: { maxAge: 60*1000*10 }}));
app.use(compression());
app.use('/admin', function (req, res, next) {
  if(req.session.userPWD && req.session.userPWD === sessionConfig.password){
    next();
  }else{
    res.redirect('/login');
  }
});
app.use('/api', routes);
app.use('/pgd/imgs/:key', function (req, res) {
  let key = req.params.key || 'default.png';
  let url = getDownloadUrl(key);
  res.redirect(301, url);
});

let nuxtConfig = require('./nuxt/nuxt.config.js');
nuxtConfig.dev = !(process.env.NODE_ENV === 'production');
const nuxt = new Nuxt(nuxtConfig);
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

app.use(nuxt.render);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;




