//jshint strict: false
module.exports = function(config) {
  config.set({

        basePath: './app',

        files: [
            'modules.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/moment/min/moment.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'components/directives/directives.js',
            'components/filters/filters.js',
            'components/services/services.js',    
            'components/filters/moment/moment.js',
            'components/filters/trusted/trusted.js',
            'components/services/notification/notification.js',
            'components/directives/popover/helpers/dimensions.js',
            'components/directives/popover/tooltip.js',
            'components/directives/popover/popover.js',
            'components/directives/pagination/dirPagination.js',
            'app.js',
            'master/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],
        
        reporters: ['mocha'],
      
        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-mocha-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
      
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            symbols: {
                success: '+',
                info: '#',
                warning: '!',
                error: 'x'
            }
        }

  });
};
