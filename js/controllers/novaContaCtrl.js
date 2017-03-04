angular.module("contas").controller("novaContaCtrl", function ($scope, contaAPI, $location, $rootScope) {		
	
	// listen for the event in the relevant $scope
	/*$rootScope.$on('myCustomEvent', function (event, data) {
		
  		console.log('>>>>>', data); // 'Data to send'
  		
	});*/

	$scope.adicionaConta = function (conta) {		
		contaAPI.saveConta(conta).success(function (data) {
			delete $scope.conta;
			$scope.contaForm.$setPristine();
			$location.path("/contas");
		});
	};	

	//console.log($rootScope.conta);

});