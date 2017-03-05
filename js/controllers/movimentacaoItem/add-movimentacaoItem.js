angular.module("contas").controller("AddMovimentacaoItemController", function($scope, $routeParams, contasTodas, MovimentacaoItemAPI) {		
		
	$scope.contas = contasTodas.data;
	$scope.movimentacaoItem = {id: null, valor: null, dataRegistro: null, 
		                       movimentacao: {id: $routeParams.idMovimentacao},
	                           conta: {id: null}};

	
	MovimentacaoItemAPI.findByMovimentacao($routeParams.idMovimentacao).then(function (result) {
    	$scope.movimentacaoitens = result.data;
    });

    $scope.loadTableItens = function() {
		MovimentacaoItemAPI.findByMovimentacao($routeParams.idMovimentacao).success(function(data) {
			$scope.movimentacaoitens = data;
		}).error(function(data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};
	
	$scope.addItem = function (movimentacaoItem) {	
	 	movimentacaoItem.dataRegistro = new Date();		 	
		MovimentacaoItemAPI.save(movimentacaoItem).success(function (data) {
			delete $scope.movimentacaoItem;
			$scope.movimentacaoItem = {movimentacao: {id: $routeParams.idMovimentacao}};
			$scope.movimentacaoItemForm.$setPristine();	
			$scope.loadTableItens();
		});
	};	

});