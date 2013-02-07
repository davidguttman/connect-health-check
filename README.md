# connect-health-check #

## Usage ##

    var healthCheck = require('connect-health-check');

    app.configure(function(){
      app.use(healthCheck);
      app.use(express.cookieParser());
      // etc...
    });