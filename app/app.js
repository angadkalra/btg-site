var app = angular.module('btg-site', ['ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
	// url defining each page, html to place in ui-view element in index.html
	// when viewing a given page and also the corresponing controller for each page
	.state('home', {
		url 		: '/home',
		templateUrl	: '../views/homeView.html',
		controller  : 'homeViewController'
	})
	.state('about', {
		url 		: '/about',
		templateUrl	: '../views/aboutView.html',
		controller  : 'aboutViewController'
	})
	.state('getHelp', {
		url 		: '/get-help',
		templateUrl	: '../views/getHelpView.html',
		controller  : 'getHelpViewController'
	})
	.state('emergency', {
		url 		: '/emergency',
		templateUrl	: '../views/emergencyView.html',
		controller  : 'emergencyViewController'
	})
	.state('contact', {
		url 		: '/contact',
		templateUrl	: '../views/contactView.html',
		controller  : 'contactViewController',
		controller  : 'contactViewController'
	})
	.state('training', {
		url 		: '/training',
		templateUrl	: '../views/trainingView.html',
		controller  : 'trainingViewController'
	});

	// The default url to display
	$urlRouterProvider.otherwise('/home');
}])
