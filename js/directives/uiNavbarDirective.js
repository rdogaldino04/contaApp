angular.module("contas").directive("uiNavbar", function () {
	return {
        templateUrl: "view/uiNavbar.html",        
		restrict: "E",
		controller: function ($scope, $location) {
			
			//$scope.currentNavItem = 'page1';
			$scope.goto = function(page) {
				console.log("Goto " + page);
				$location.path(page);
			}
		}
	};
});