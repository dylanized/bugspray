// Bugspray

var edt = require('express-debug'),
	errorface = require('errorface');

var cached_app = false;

module.exports.edt = function(app, flag) {
	cached_app = app;
	cached_app.use(edt(cached_app, {}));
}

module.exports.error = function(app, flag) {
	if (app) cached_app = app;
	cached_app.use(errorface.errorHandler());
}