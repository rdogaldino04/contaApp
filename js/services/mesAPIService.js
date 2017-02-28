angular.module("contas").factory("mesAPI", function () {
	var _getMeses = function () {
		return ["JANEIRO", 
			    "FEVEREIRO", 
			    "MARÇO", 
			    "ABRIL", 
			    "MAIO", 
			    "JUNHO", 
			    "JULHO",
			    "AGOSTO",
			    "SETEMBRO",
			    "OUTUBRO",
			    "NOVEMBRO",
			    "DEZEMBRO"];
	};
	
	return {
		getMeses: _getMeses		
	};
});