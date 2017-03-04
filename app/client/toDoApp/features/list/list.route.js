angular
	.module('toDoApp.list')
	.config(listConfig);

function listConfig($stateProvider) {

	// Define list state
	$stateProvider.state(
		{
			name:         'list',
			url:          '/list',
			templateUrl:  '/toDoApp/features/list/list.html',
			controller:   'ListCtrl',
			controllerAs: 'ListVM'
		}
	);
}