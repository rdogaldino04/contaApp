angular.module("contas").factory("MovimentacaoItemAPI", function ($http, config) {
		
	var _save = function (movimentacaoItem) {
		return $http.post(config.baseUrl + "/itens", movimentacaoItem);
	};

	var _findByMovimentacao = function (idMovimentacao) {
		return $http.get(config.baseUrl + "/itens/movimentacao/" + idMovimentacao);
	};
	
	return {		
		save: _save,
		findByMovimentacao: _findByMovimentacao
	};
});