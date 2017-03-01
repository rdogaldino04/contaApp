angular.module("contas").factory("movimentacaoAPI", function ($http, config) {
	var _findByMovimentacoesAbertasSemItens = function () {
		return $http.get(config.baseUrl + "/movimentacoes");
	};
	
	var _save = function (movimentacao) {
		return $http.post(config.baseUrl + "/movimentacoes", movimentacao);
	};
	
	return {
		findByMovimentacoesAbertasSemItens: _findByMovimentacoesAbertasSemItens,
		save: _save
	};
});