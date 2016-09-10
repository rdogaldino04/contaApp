angular.module("contas").factory("contaAPI", function ($http, config) {
	var _getContas = function () {
		return $http.get(config.baseUrl + "/contas");
	};
	
	var _saveConta = function (conta) {
		return $http.post(config.baseUrl + "/contas", conta);
	};
	
	return {
		getContas: _getContas,
		saveConta: _saveConta
	};
});