angular.module("contas").controller("getMovimetacoesController", function($scope, movimentacoesAbertasSemItens, $location) {

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
		$location.path("/item/add/" + idMovimentacao);
	};
	
});