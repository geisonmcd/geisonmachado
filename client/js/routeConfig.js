angular.module("customerApp", ['ngRoute']).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "view/home.html",
        controller: "customerCtrl"
    });   
}]);