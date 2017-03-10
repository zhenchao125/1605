//导入我们需要的模块
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//获取到app对象。 express负责维护的。 app负责我们的各种路由。
var app = express();

// view engine setup
// ...../Node_1/views
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// 设置放置静态资源的目录： html、图片等允许用户可以直接访问的资源。
app.use(express.static(path.join(__dirname, 'public')));

//核心的处理请求的路由处理
//导入模块
var index = require('./routes/index');
//设置路由
app.use('/hello', index);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
