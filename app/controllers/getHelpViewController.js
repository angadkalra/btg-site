app.controller('getHelpViewController', ['$scope', function($scope) {
	// This message controls what is displayed in getHelpView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently
	$scope.message = "You are currently viewing the Get Help page!"
	$scope.submit = function () {
	    $.ajax({
            url : 'https://localhost:8080/sendEmail',
            type : 'POST',
            data : {
                name: $scope.name,
                email: $scope.email,
                reason: $scope.reason
            },
            crossDomain: true,
            success : function(data) {
                console.log('Data: '+data);
            },
            error : function(request,error)
            {
                console.log(error);
            }
        });
	};
}])