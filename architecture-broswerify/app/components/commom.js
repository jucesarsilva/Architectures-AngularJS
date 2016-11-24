$ = jQuery = require('../bower_components/jquery/dist/jquery.min.js');
require('../bower_components/bootstrap/dist/js/bootstrap.min.js');
require('../bower_components/angular/angular.min.js');
require('../bower_components/angular-route/angular-route.min.js');

var app = require('./app.js').call();

require('./controllers/home/home.js').call(null, app);
require('./controllers/about/about.js').call(null, app);