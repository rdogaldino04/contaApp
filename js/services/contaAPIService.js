angular.module("contas").factory("contaAPI", function ($http, config) {
	var _getContas = function () {
		return [{id: 1, descricao: "Energia"}, {id: 2, descricao: "Água"}, {id: 3, descricao: "Gás"}]//$http.get(config.baseUrl + "/contas");
	};
	
	var _saveConta = function (conta) {
		return $http.post(config.baseUrl + "/contas", conta);
	};

	var _findById = function (id) {
		return $http.get(config.baseUrl + "/contas/" + id);
	};
	
	return {
		getContas: _getContas,
		saveConta: _saveConta,
		findById: _findById
	};
});