angular
	.module('toDoApp', [

		// Global dependencies
		'ui.router',
		'ngMaterial',

		// Features
		'toDoApp.create',
		'toDoApp.list',
		'toDoApp.completed'
	])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	//	Redirect unknown routes to /
	$urlRouterProvider.otherwise('/');
}
