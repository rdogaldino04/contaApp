angular.module("contas").config(function ($routeProvider) {

	$routeProvider.when("/contas", {
		templateUrl: "view/contas/get-contas-view.html",
		controller: "GetContasController",
		resolve: {
			contasTodas: function (contaAPI) {
				return contaAPI.getContas();
			}
		}
	});

	$routeProvider.when("/contas/nova", {
		templateUrl: "view/contas/create-or-update-conta-view.html",
		controller: "CreateContaController"		
	});

	$routeProvider.when("/contas/editar/:id", {
		templateUrl: "view/contas/create-or-update-conta-view.html",
		controller: "UpdateContaController"		
	});
	
	$routeProvider.when("/movimentacoes/nova", {
		templateUrl: "view/movimentacoes/novaMovimentacao.html",
		controller: "novaMovimentacaoCtrl"
	});
	
	$routeProvider.when("/movimentacoes", {
		templateUrl: "view/movimentacoes/movimentacoes.html",
		controller: "movimentacoesCtrl",
		resolve: {
			movimentacoesAbertasSemItens: function (movimentacaoAPI) {
				return movimentacaoAPI.findByMovimentacoesAbertasSemItens();
			}
		}		
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
	$routeProvider.otherwise(
		{redirectTo: "/"}
	);
});