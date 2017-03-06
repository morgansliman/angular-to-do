angular
	.module('toDoApp.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(api) {
	var vm = this;

	vm.todos = api.todos;
}