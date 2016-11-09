;(function( undefined ) {
    
    'use strict';
    
    require.config({
        baseUrl: './../',
        paths: {
            jquery: 'bower_components/jquery/dist/jquery.min',
            angular: 'bower_components/angular/angular',
            bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
            modernizr: 'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min',
            angularloader: 'bower_components/angular-loader/angular-loader.min',
            moment: 'bower_components/moment/min/moment.min',
            directives: 'components/directives/directives',
            filters: 'components/filters/filters',
            services: 'components/services/services',
            factories: 'components/factories/factories'
        },
        shim: {
            angular: { exports: 'angular'},
            bootstrap :  {
                deps: ['jquery']
            }
        }
    });
    
    require(['jquery', 'angular', 'bootstrap', 'modernizr', 'angularloader', 
             'moment', 'modules', 'directives', 'filters', 'services', 'factories', 'components/controllers/home' ], function ( ) {
    });
    
})();