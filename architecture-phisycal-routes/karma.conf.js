//jshint strict: false
module.exports = function(config) {
  config.set({
        basePath: './architecture-phisycal-routes',
        files: [
            'modules.js',
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/bootstrap/dist/js/bootstrap.min.js',
            'bower_components/moment/min/moment.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'components/directives/directives.js',
            'components/filters/filters.js',
            'components/services/services.js',    
            'components/factories/factories.js',
            'components/controllers/*.js'
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
