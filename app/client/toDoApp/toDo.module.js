angular
	.module('toDoApp', [

		// Global dependencies
		'ui.router',
		'ngMaterial',
		'ngAria',
		'ngMdIcons',

		// Features
		'toDoApp.create',
		'toDoApp.list',
		'toDoApp.completed'
	])
	.config(appConfig);

function appConfig($urlRouterProvider, $mdThemingProvider) {
	//	Redirect unknown routes to /list
	$urlRouterProvider.otherwise('/list');

	$mdThemingProvider
		.theme('default')
		.primaryPalette('blue-grey', {
			'default': '500'
		})
		.accentPalette('red', {
			'default': '500'
		});
}