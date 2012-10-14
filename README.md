# health-check #

## Usage ##

    var healthCheck = require('health-check');

    app.configure(function(){
      app.use(healthCheck);
      app.use(express.cookieParser());
      // etc...
    });