angular.module("contas").controller("createContaController", function ($scope, contaAPI, $location) {		
	
	$scope.adicionaConta = function (conta) {		
		contaAPI.saveConta(conta).success(function (data) {
			delete $scope.conta;
			$scope.contaForm.$setPristine();
			$location.path("/contas");
		});
	};	

});