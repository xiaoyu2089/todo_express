var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world')
});

var server = app.listen(3000, function() {
	console.log('server start at: http://localhost:3000');
});