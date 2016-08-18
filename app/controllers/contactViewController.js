app.controller('contactViewController', ['$scope', function($scope) {
	// This message controls what is displayed in contactView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently
	$scope.message = "You are currently viewing the Contact Us page!"
	console.log("i am in the contact view controller!");
}])