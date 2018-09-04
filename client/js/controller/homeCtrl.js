angular.module("customerApp").controller("homeCtrl", ["$scope", "$location", function ($scope, $location){
    
    $scope.customers;
    $scope.newCustomer;
    $scope.index = 0;
    $scope.rodadas;
    
    $scope.add = function(newCustomer) {
        $scope.customers = $scope.customers || [];
        $scope.customers.push(angular.copy({customerName: newCustomer}));
        delete $scope.newCustomer;
    }


    $scope.addRodada = function(){
        $scope.rodadas = $scope.rodadas || [];
        $scope.rodadas.push($scope.rodadas.length+ 1);
    }
    
}]);