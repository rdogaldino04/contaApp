angular.module("contas").controller("updateContaController", function ($scope, $routeParams, contaAPI, $location) {		
	
	contaAPI.findById($routeParams.id).then(function (result) {
    	$scope.conta = result.data;
    });

  	$scope.adicionaConta = function (conta) {		  		
		contaAPI.saveConta(conta).success(function (data) {
			delete $scope.conta;
			$scope.contaForm.$setPristine();
			$location.path("/contas");
		});
	};	


});