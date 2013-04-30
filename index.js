// Bugspray

module.exports = function(app) {

	edt = require('express-debug');
	errorface = require('errorface');
	
	// launch express debug tab
	if (process.argv[2] == "edt" || 
		process.argv[2] == "--edt" ||
		process.argv[2] == "debug" ||
		process.argv[2] == "--debug" ||
		process.argv[2] == "--debug-brk") {
			app.use(edt(app, {}))
	}
	
	// launch special error page
	app.use(errorface.errorHandler());

}