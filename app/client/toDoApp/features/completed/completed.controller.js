angular
	.module('toDoApp.completed')
	.controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl(api, $rootScope) {
	var vm = this;

	vm.todos = api.todos;

	$rootScope.clear = function () {
		console.log('clearing completed todo\'s');
		api.clearCompleted();
	}
}