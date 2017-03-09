angular
	.module('toDoApp', [

		// Global dependencies
		'ui.router',
		'ngMaterial',
		'ngAria',
		'ngMessages',
		'ngMdIcons',

		// Features
		'toDoApp.list',
		'toDoApp.completed'
	])
	.config(appConfig);

function appConfig($urlRouterProvider, $mdThemingProvider) {
	//	Redirect unknown routes to /list
	$urlRouterProvider.otherwise('/list');

	var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
		'contrastDefaultColor': 'light',
		'contrastDarkColors': ['50'],
		'50': 'ffffff'
	});
	$mdThemingProvider.definePalette('customBlue', customBlueMap);
	$mdThemingProvider.theme('default')
	                  .primaryPalette('customBlue', {
		                  'default': '500',
		                  'hue-1': '50'
	                  })
	                  .accentPalette('pink');
	$mdThemingProvider.theme('input', 'default')
	                  .primaryPalette('grey')
}