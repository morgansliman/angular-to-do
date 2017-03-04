angular
	.module('toDoApp.create')
	.config(createConfig);

function createConfig($stateProvider) {

	// Define our create state
	$stateProvider.state(
		{
			name:         'create',
			url:          '/create',
			templateUrl:  '/toDoApp/features/create/create.html',
			controller:   'CreateCtrl',
			controllerAs: 'CreateVM'
		}
	);
}