angular.module("contas").controller("movimentacoesCtrl", function($scope, movimentacoesAbertasSemItens, $location) {
	$scope.app = "Controle de Contas";
	$scope.movimetacoesList = movimentacoesAbertasSemItens.data;
	var carregarMovimentacoes = function() {
		movimentacaoAPI.findByMovimentacoesAbertasSemItens().success(function(data) {
			$scope.movimetacoesList = data;
		}).error(function(data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};
	$scope.redirectMovimentacaoItem = function(idMovimentacao) {
		console.log('>>>>>>>>>', idMovimentacao);
		$location.path("/error");
	};
});