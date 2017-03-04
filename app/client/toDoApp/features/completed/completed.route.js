angular
	.module('toDoApp.completed')
	.config(completedConfig);

function completedConfig($stateProvider) {

	// Define our completed state
	$stateProvider.state(
		{
			name:         'completed',
			url:          '/completed',
			templateUrl:  '/toDoApp/features/completed/completed.html',
			controller:   'CompletedCtrl',
			controllerAs: 'CompletedVM'
		}
	);
}