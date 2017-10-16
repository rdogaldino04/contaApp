angular.module("contas").directive("cadastroMovimentacao", function () {
    return {
        templateUrl: "view/movimentacao/cadastroMovimentacao.html",
        restrict: "E",
        controller: function ($scope, movimentacaoAPI) {
            $scope.idMovimentacaoPesquisa = "";
            var agora = new Date();             
            $scope.movimentacao = {
                id: 0, ano: agora.getFullYear(), 
                mes: agora.getMonth()
            };            
            
            $scope.desabilitaControlesMovimentacao = false;                      

            $scope.salvar = function(movimentacao) {
                movimentacao.statusMovimentacao = 'ABERTA';
                movimentacao.dataRegistro = new Date();		
                movimentacaoAPI.save(movimentacao).success(function (data) {
                    console.log(data);                    
                    
                    //$location.path("/movimentacoes");		
                }).error(function(data, status) {                   
                    console.log("Aconteceu um problema: " + data + '--' + status);
                });                           
                console.log(movimentacao);                
                $scope.desabilitaControlesMovimentacao = true;
            }

            $scope.getByIdMovimentacao = function(id, event) {
                console.log('id: ' + id);                
                $scope.movimentacao.id = id;
                $scope.idMovimentacaoPesquisa = "";
                $scope.desabilitaControlesMovimentacao = true;

            }
        }
    };
});    