angular.module("contas").config(function ($routeProvider) {

	$routeProvider.when("/contas4", {
		templateUrl: "view/conta/get-contas.html",
		controller: "getContasController",
		resolve: {
			contasTodas: function (contaAPI) {
				return contaAPI.getContas();
			}
		}
	});

	$routeProvider.when("/contas/novasss", {
		templateUrl: "view/conta/create-or-update-conta.html",
		controller: "createContaController"		
	});

	//teste
	$routeProvider.when("/contas", {
		template: "<cadastro-conta></cadastro-conta>",		
	});

	$routeProvider.when("/contas/editar/:id", {
		templateUrl: "view/conta/create-or-update-conta.html",
		controller: "UpdateContaController"		
	});
	
	$routeProvider.when("/movimentacoes/nova", {
		templateUrl: "view/movimentacao/create-movimentacao.html",
		controller: "createMovimentacaoController"
	});
	
	$routeProvider.when("/movimentacoes", {
		templateUrl: "view/movimentacao/get-movimentacoes.html",
		controller: "getMovimetacoesController",
		resolve: {
			movimentacoesAbertasSemItens: function (movimentacaoAPI) {
				return movimentacaoAPI.findByMovimentacoesAbertasSemItens();
			}
		}		
	});

	$routeProvider.when("/item/add/:idMovimentacao", {
		templateUrl: "view/movimentacaoItem/add-movimentacaoItem.html",
		controller: "AddMovimentacaoItemController",
		resolve: {
			contasTodas: function (contaAPI) {
				return contaAPI.getContas();
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
		templateUrl: "view/error/error.html"
	});
	$routeProvider.otherwise(
		{redirectTo: "/"}
	);
});