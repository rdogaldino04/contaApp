angular.module("contas").directive("cadastroMovimentacao", function () {
    return {
        templateUrl: "view/movimentacao/cadastroMovimentacao.html",
        restrict: "E",
        controller: function ($scope) {
            $scope.idMovimentacaoPesquisa = "";
            var agora = new Date();             
            $scope.movimentacao = {
                id: 0, ano: agora.getFullYear(), 
                mes: agora.getMonth()
            };            
            
            $scope.desabilitaControlesMovimentacao = false;                      

            $scope.salvar = function(movimentacao) {                            
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