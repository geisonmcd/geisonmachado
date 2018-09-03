angular.module("customerApp", []).controller("customerCtrl", ["$scope", function ($scope){
    
    $scope.customers;
    $scope.newCustomer;
    $scope.index = 0;
    
    $scope.add = function(newCustomer) {
        $scope.customers = $scope.customers || [];
        var customer = angular.copy({id: $scope.index++, customerName: newCustomer});
        $scope.customers.push(customer);
        delete $scope.newCustomer;
    }
    
}]);