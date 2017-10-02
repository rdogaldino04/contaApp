angular.module("contas").directive("cadastroConta", function () {
	return {        
        templateUrl: "view/conta/cadastroConta.html",        
        //template: '<p class="teste">cadastro conta</p>',
		restrict: "E",
		controller: function ($scope, contaAPI) {                                    
            $scope.conta = {};
            $scope.contas = contaAPI.getContas();

            $scope.adicionaConta = function (conta) {		
                //contaAPI.saveConta(conta).success(function (data) {
                  //  delete $scope.conta;
                   // $scope.contaForm.$setPristine();
                    //$location.path("/contas");
                //});                
                $scope.conta.id = $scope.contas.length + 1;
                $scope.contas.push(conta);                
                $scope.contaForm.reset;
                $scope.contaForm.$setPristine();
                delete $scope.conta;
            };	
		}
	};
});