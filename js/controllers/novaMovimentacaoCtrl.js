angular.module("contas").controller("novaMovimentacaoCtrl", function($scope, mesAPI, movimentacaoAPI, $location) {				
	$scope.meses = mesAPI.getMeses();		
	$scope.adicionaMovimentacao = function (movimentacao) {				
		movimentacao.statusMovimentacao = 'ABERTA';
		movimentacao.dataRegistro = new Date();
		console.log(movimentacao);		
		movimentacaoAPI.save(movimentacao).success(function (data) {
			delete $scope.movimentacao;
			$scope.movimentacaoForm.$setPristine();
			$location.path("/movimentacoes");		
		});		
	};
});