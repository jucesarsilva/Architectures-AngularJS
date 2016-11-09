/**
 * @function home controller
 * @author julio_c.silva@outlook.com
 * @since 07/11/2016
 * @returns
 */
(function __home(angular, modules){
    
    'use strict';
    
    angular.module(modules.main, [
        modules.directives,
        modules.filters,
        modules.services,
        modules.factories
    ]); 
    
    angular.module(modules.main).controller("HomeController", HomeController); 
    
    HomeController.$inject = ['$scope'];
    
    function HomeController($scope){
        $scope.teste = "Funfou!!!";
    };
    
})(angular, modules);