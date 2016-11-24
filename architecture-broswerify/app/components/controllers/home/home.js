module.exports = function __ModuleHomeController(app){
    
    var minimize = require('../../filters/minimize.js').call(null, app);
    
    app.root.controller('HomeController', HomeController);
    
    HomeController.$inject = ['$scope', '$timeout'];
    
    function HomeController($scope, $timeout) {
        $scope.teste = "controller home";
    };
    
    return HomeController;
};