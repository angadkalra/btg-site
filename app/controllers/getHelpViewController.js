app.controller('getHelpViewController', ['$scope', function($scope) {
	// This message controls what is displayed in getHelpView.html
	// Changing this message here will change what is displayed in the ui-view
	// consequently

	$scope.message = "You are currently viewing the Get Help page!"
	$scope.submit = function () {
	    var toggleOverlay = function() {
	        if ($('.modal-help-form.display-modal').length) {$('.modal-help-form').removeClass('display-modal');}
	        else {$('.modal-help-form').addClass('display-modal');}
	        if (!$('.modal-help-overlay').length) {$('.form-wrapper').append('<p class="modal-help-overlay help-sending">Sending...</p>');}
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
                $('.modal-help-overlay').removeClass('help-sending').addClass('help-success')
                .html('<span>Thank you.</span><br><br> We will respond as soon as possible.');
                setTimeout(function(){
                    toggleOverlay();
                }, 15000);
            },
            error : function(request,error)
            {
                console.log(error);
                $('.modal-help-overlay').removeClass('help-sending').addClass('help-error')
                .html('Email could not be sent at this time.<br> Please try again later.<br><br> We apologize for the inconvenience.');
                setTimeout(function(){
                    toggleOverlay();
                }, 30000);
            }
        });
	};
}])