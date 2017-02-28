angular.module("contas").factory("movimentacaoAPI", function ($http, config) {
	var _findAll = function () {
		return $http.get(config.baseUrl + "/movimentacoes");
	};
	
	var _save = function (movimentacao) {
		return $http.post(config.baseUrl + "/movimentacoes", movimentacao);
	};
	
	return {
		findAll: _findAll,
		save: _save
	};
});