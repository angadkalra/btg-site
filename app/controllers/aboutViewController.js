app.controller('aboutViewController', ['$scope', function($scope) {
	// This message controls what is displayed in aboutView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently
	$scope.message = "You are currently viewing the About Us page!"
}])