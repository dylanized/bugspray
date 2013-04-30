bugspray
========

This module is a wrapper for several useful Express.js debugging utilities:

- errorface, colorful and descriptive error pages
- express-debug, which provides a debugger tab in your express

Setup
---

After you load Express, do this:

    if ('development' == app.get('env')) {
      var bugspray = require('bugspray')(app);
    }


Debug Tab
---

To launch the debug tab, pass "--edt" or "--debug" to your Node app.

More soon!