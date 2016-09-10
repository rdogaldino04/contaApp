angular.module("contas").controller("contasCtrl", function($scope, $http) {
	$scope.app = "Controle de Contas";

	$scope.contaList = [];

	var carregarContas = function() {
		$http.get("http://localhost:8080/contas").success(function(data) {
			$scope.contaList = data;
		}).error(function(data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.adicionaConta = function(conta) {
		$http.post("http://localhost:8080/contas", conta).success(function (data) {				
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