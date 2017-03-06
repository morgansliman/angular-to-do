angular
	.module('toDoApp.completed')
	.controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl(api) {
	var vm = this;

	vm.todos = api.todos;
}