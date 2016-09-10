angular.module("contas").controller("contasCtrl", function($scope, contaAPI) {
	$scope.app = "Controle de Contas";

	$scope.contaList = [];

	var carregarContas = function() {
		contaAPI.getContas().success(function(data) {
			$scope.contaList = data;
		}).error(function(data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.adicionaConta = function(conta) {
		contaAPI.saveConta(conta).success(function (data) {				
			delete $scope.conta;
			$scope.contaForm.$setPristine();	
			carregarContas();
		}).error(function(data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	carregarContas();
});