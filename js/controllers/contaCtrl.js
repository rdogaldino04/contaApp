angular.module("contas").controller("contasCtrl", function($scope, contasTodas, $location, contaAPI, $rootScope) {
	$scope.app = "Controle de Contas";
	$scope.contaList = contasTodas.data;
	
	var carregarContas = function() {
		contaAPI.getContas().success(function(data) {
			$scope.contaList = data;
		}).error(function(data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	/*$scope.editarConta = function(conta) {		  
	
		$rootScope.$broadcast('myCustomEvent', conta);
		$location.path("/contas/editar");
		
	};*/

	$scope.editarConta = function(conta) {
		$location.path("/contas/editar/" + conta.id);
	};

	
	

});