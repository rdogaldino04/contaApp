angular.module("contas").config(function ($routeProvider) {

	$routeProvider.when("/contas", {
		templateUrl: "view/conta/get-contas.html",
		controller: "GetContasController",
		resolve: {
			contasTodas: function (contaAPI) {
				return contaAPI.getContas();
			}
		}
	});

	$routeProvider.when("/contas/nova", {
		templateUrl: "view/conta/create-or-update-conta.html",
		controller: "CreateContaController"		
	});

	$routeProvider.when("/contas/editar/:id", {
		templateUrl: "view/conta/create-or-update-conta.html",
		controller: "UpdateContaController"		
	});
	
	$routeProvider.when("/movimentacoes/nova", {
		templateUrl: "view/movimentacao/create-movimentacao.html",
		controller: "CreateMovimentacaoController"
	});
	
	$routeProvider.when("/movimentacoes", {
		templateUrl: "view/movimentacao/get-movimentacoes.html",
		controller: "GetMovimetacoesController",
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