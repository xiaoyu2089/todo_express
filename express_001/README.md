#express hello world

## 初始化package.json
```js
npm init

```

----

## 创建程序入口点app.js

```js
cd .> app.js 创建文件
```

## 安装express 包

```js

npm install express --save

```

----
## 程序启动代码

```js
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world')
});

var server = app.listen(3000, function() {
	console.log('server start at: http://localhost:3000');
});
```

## 启动程序

``` js

node app.js

```