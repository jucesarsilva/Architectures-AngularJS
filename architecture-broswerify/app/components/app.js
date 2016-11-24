module.exports = function __ModuleApp(){
    
    //declarate modules names
    this.modules         = {};
    this.modules.main        = "S2it";
    this.modules.directives  = this.modules.main.concat(".directives");
    this.modules.filters     = this.modules.main.concat(".filters");
    this.modules.services    = this.modules.main.concat(".services");
    this.modules.factories   = this.modules.main.concat(".factories");

    //declarate modules
    this.directives  = angular.module(this.modules.directives, []);
    this.filters     = angular.module(this.modules.filters, []);
    this.services    = angular.module(this.modules.services, []);
    this.factories   = angular.module(this.modules.factories, []);

    //declarate root module
    this.root = angular.module(this.modules.main, [
        'ngRoute',
        this.modules.directives,
        this.modules.filters,
        this.modules.services
    ]);

    //declarate routes
    this.root.config(Config);

    Config.$inject = ['$locationProvider', '$routeProvider', '$httpProvider'];

        function Config($locationProvider, $routeProvider, $httpProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when('/home', {
            templateUrl: 'components/controllers/home/home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'components/controllers/about/about.html',
            controller: 'AboutController'
        })
        .otherwise({redirectTo: '/home'});
    }; 
    
    return this;
};