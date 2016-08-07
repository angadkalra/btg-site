angular.module('btg-site', ['route', 'ui-router', 'aboutViewController', 
	'contactViewController', 'emergencyViewController', 'getHelpViewController', 'trainingViewController'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl : 'views/home.html',
			controller  : 'mainController'
		})
}])