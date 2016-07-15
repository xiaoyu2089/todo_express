exports.write = function(req, res, next) {
	console.log(req.path);
	next();
}