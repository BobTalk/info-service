var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
//声明页面路由
var routes = require('./routes')
//声明接口路由

var app = express()
app.use(express.static(path.join(__dirname,'views'))
)
app.use('/',routes)
//设置跨域访问接口，放到页面声明之后
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//定义接口路由访问名称
//app.use('url',name);
module.exports = app;
