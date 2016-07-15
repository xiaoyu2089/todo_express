var express = require('express');
var router = express.Router();



router.get('/index', function(req, res) {
	res.render('index');
});

router.get('/a', function(req, res) {
	res.render('a.html');
});



module.exports = router;