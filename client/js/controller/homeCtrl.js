angular.module("customerApp").controller("homeCtrl", ["$scope", "$location", function ($scope, $location){
    
    $scope.customers = [{name:'geison'},{name:'dilon'}, {name:'davi'}, {name:'dilei'}];
    $scope.newCustomer;
    $scope.index = 0;
    $scope.rodadas;
    
    $scope.add = function(newCustomer) {
        if (!newCustomer) return;
        $scope.customers = $scope.customers || [];
        $scope.customers.push(angular.copy( {name: newCustomer} ));
        delete $scope.newCustomer;
    };

    $scope.addRodada = function(){
        $scope.rodadas = $scope.rodadas || [];
        var rodada = { id:$scope.index };
        for (i=0; i<$scope.customers.length ; i++) {
            rodada[$scope.customers[i].name] = rodada[$scope.customers[i].name] || {};
            rodada[$scope.customers[i].name].points = 10;
        }
        $scope.rodadas.push(rodada);
        $scope.index++;
    };

    $scope.corre = function (customer) {
        if (!$scope.rodadas) return;
        var rodadaJogador = $scope.rodadas[$scope.index-1][customer.name];
        if (rodadaJogador.status === 'correu') {
            rodadaJogador.points++;
            rodadaJogador.status = 'jogou';
        } else {
            rodadaJogador.points--;
            rodadaJogador.status = 'correu';
        }
    };
    
}]);