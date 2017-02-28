angular.module("contas").config(function ($routeProvider) {
	$routeProvider.when("/contas", {
		templateUrl: "view/contas.html",
		controller: "contasCtrl",
		resolve: {
			contasTodas: function (contaAPI) {
				return contaAPI.getContas();
			}
		}
	});
	$routeProvider.when("/novaConta", {
		templateUrl: "view/novaConta.html",
		controller: "novaContaCtrl"		
	});
	$routeProvider.when("/movimentacoes/nova", {
		templateUrl: "view/movimentacoes/novaMovimentacao.html",
		controller: "novaMovimentacaoCtrl"
	});
	$routeProvider.when("/movimentacoes", {
		templateUrl: "view/movimentacoes/movimentacoes.html",
		controller: "novaMovimentacaoCtrl"
	});
	/*$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});*/
	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});
	$routeProvider.otherwise({redirectTo: "/"});
});