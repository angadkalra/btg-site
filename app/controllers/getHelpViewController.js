app.controller('getHelpViewController', ['$scope', function($scope) {
	// This message controls what is displayed in getHelpView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently

	$scope.message = "You are currently viewing the Get Help page!"
	$scope.submit = function () {
	    var toggleOverlay = function() {
	        if ($('.modal-help-form.display-modal').length) {$('.modal-help-form').removeClass('display-modal');}
	        else {$('.modal-help-form').addClass('display-modal');}
	        if (!$('.modal-help-overlay').length) {$('.form-wrapper').append('<p class="modal-help-overlay">Sending...</p>');}
	        else {$('.modal-help-overlay').remove();}
	    }

        toggleOverlay();
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
                toggleOverlay();
            },
            error : function(request,error)
            {
                console.log(error);
                toggleOverlay();
            }
        });
	};
}])