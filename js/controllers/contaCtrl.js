angular.module("contas").controller("contasCtrl", function($scope, contasTodas) {
	$scope.app = "Controle de Contas";
	$scope.contaList = contasTodas.data;
	
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
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};		
	
});