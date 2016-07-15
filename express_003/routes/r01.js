var express = require('express');
var log = require('../public/src/util/log');
var router = express.Router();

router.use('/', log.write);

router.get('/', function(req, res) {
	res.send('root');
});

router.get('/about', function(req, res) {
	res.send('about');
});

/* 路由句柄
可以为请求处理提供多个回调函数，其行为类似 中间件。唯一的区别是这些回调函数有可能调用 next('route') 方法而略过其他路由回调函数。
可以利用该机制为路由定义前提条件，如果在现有路径上继续执行没有意义，则可将控制权交给剩下的路径。
路由句柄有多种形式，可以是一个函数、一个函数数组，或者是两者混合

可以为某个方法单独使用，也可以直接 router.use('/',log.write)

*/

router.get('/log', log.write, function(req, res) {
	res.send('log....');
})

module.exports = router;