module.exports = function __ModuleAboutController(app){

    app.root.controller('AboutController', AboutController);
    
    AboutController.$inject = ['$scope', '$timeout'];
    
    function AboutController($scope, $timeout) {
        $scope.teste = "controller about";
    };
    
    return AboutController;
};