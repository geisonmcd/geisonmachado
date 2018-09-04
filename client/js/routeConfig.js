angular.module("customerApp", ['ngRoute']).config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: "view/home.html",
        controller: "customerCtrl"
    });   
    $routeProvider.when('/sobre', {
        templateUrl: "view/sobre.html",
        controller: "sobreCtrl"
    });  
}])
.controller("customerCtrl", ["$scope", "$location", function ($scope, $location){
    
    $scope.customers;
    $scope.newCustomer;
    $scope.index = 0;
    $scope.algo = $location.path();
    
    $scope.add = function(newCustomer) {
        $scope.customers = $scope.customers || [];
        $scope.customers.push(angular.copy({id: $scope.index++, customerName: newCustomer}));
        delete $scope.newCustomer;
    }
    
}]).controller("sobreCtrl", ["$scope", "$location", function ($scope, $location){
    
    $scope.customers;
    $scope.newCustomer;
    $scope.index = 0;
    $scope.algo = $location.path();
    
    $scope.add = function(newCustomer) {
        $scope.customers = $scope.customers || [];
        $scope.customers.push(angular.copy({id: $scope.index++, customerName: newCustomer}));
        delete $scope.newCustomer;
    }
    
}]);