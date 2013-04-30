bugspray
========

This module is a wrapper for several useful Express.js debugging utilities:

- [errorface](https://github.com/jgable/errorface), colorful and descriptive error pages
- [express-debug](https://github.com/devoidfury/express-debug), provides a browser debugger tab

Setup
---

Load module:

    var bugspray = require('bugspray');
   
Run Express Debug Tab (must be run before router):

    bugspray.edt(app);   
    
Run Errorface (must be run after the routes, instead of Express error handler):

    bugspray.error(app);

Customize
---

You should only run this in development or test environments. You can use conditionals like this:

    if ('development' == app.get('env')) {
      bugspray.edt(app);
    }

You can toggle the debugger tab with a command line argument like this:

    if (process.argv[2] === "--edt") {
    	bugspray.edt(app);		
    }
