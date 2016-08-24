app.controller('trainingViewController', ['$scope', function($scope) {
	// This message controls what is displayed in trainingView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently
	$scope.message = "You are currently viewing the Training page!"
	console.log("i am in the training view controller!");

}])