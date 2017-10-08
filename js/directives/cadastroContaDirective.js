angular.module("contas").directive("cadastroConta", function () {
	return {        
        templateUrl: "view/conta/cadastroConta.html",        
        //template: '<p class="teste">cadastro conta</p>',
		restrict: "E",
		controller: function ($scope, contaAPI) {                                    
            $scope.conta = {};
            
            var carregarContas = function() {
                contaAPI.getContas().success(function(data) {
                    $scope.contas = data;
                }).error(function(data, status) {
                    $scope.message = "Aconteceu um problema: " + data;
                });
            };

            $scope.adicionaConta = function (conta) {		
                contaAPI.saveConta(conta).success(function (data) {
                    //$scope.conta.id = $scope.contas.length + 1;
                    //$scope.contas.push(conta);                 
                    $scope.contaForm.reset;
                    $scope.contaForm.$setPristine();
                    delete $scope.conta;
                    $scope.conta = {};
                    carregarContas();                  
                }).error(function(data, status) {
                    //$scope.message = "Aconteceu um problema: " + data;
                    console.log("Aconteceu um problema: " + data);
                });                                
            };


            $scope.selecionar = function(conta) {                              
                angular.copy(conta, $scope.conta);              
            }
            carregarContas();	
		}
	};
});