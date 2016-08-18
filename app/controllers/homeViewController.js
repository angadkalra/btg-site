angular.module('btg-site').controller('homeViewController', ['$scope', function($scope) {
	// This message controls what is displayed in homeView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently
	$scope.message = "You are currently viewing the Home page!"
}])