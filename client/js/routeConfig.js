angular.module("customerApp", ['ngRoute']).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "view/home.html",
        controller: "homeCtrl"
    });   
    $routeProvider.when('/sobre', {
        templateUrl: "view/sobre.html",
        controller: "sobreCtrl"
    });  
}]);
