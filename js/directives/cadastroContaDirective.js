angular.module("contas").directive("cadastroConta", function () {
	return {
        templateUrl: "view/conta/cadastroConta.html",        
        //template: '<p class="teste">cadastro conta</p>',
		restrict: "E",
		controller: function ($scope, contaAPI) {            
            $scope.adicionaConta = function (conta) {		
                //contaAPI.saveConta(conta).success(function (data) {
                  //  delete $scope.conta;
                   // $scope.contaForm.$setPristine();
                    //$location.path("/contas");
                //});
                //console.log(conta);
                console.log(conta);
            };	
		}
	};
});