angular.module('btg-site').controller('emergencyViewController', ['$scope', function($scope) {
	// This message controls what is displayed in emergencyView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently
	$scope.message = "You are currently viewing the Emergency page!"
}])