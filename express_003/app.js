var express = require('express');
var path = require('path'); //nodejs内置系统路径模块
var routes = require('./routes/r02');
var app = express();

// 使用ejs 模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routes);

/** 使用html模板引擎
//导入ejs
var ejs = require('ejs');
//指定html引擎
app.engine('.html', ejs.__express);
//视图引擎
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
*/

var server = app.listen(3000, function() {
	console.log('server start at: http://localhost:3000');
});