angular
	.module('toDoApp.component.dialog')
	.directive('newTodoDialog', newTodoDialog);

function newTodoDialog() {
	return {
		restrict:         'E',
		templateUrl:      '/toDoApp/features/components/dialog/dialog.html',
		controller:       DialogCtrl,
		controllerAs:     'DialogVM'
	};
}

function DialogCtrl(api, $mdDialog) {
	var vm = this;

	vm.minDate = new Date();

	vm.todo = { todo: '', completeBy: null, completed: false };

	vm.submit = function () {
		console.log('creating:', vm.todo);
		api.createTodo(vm.todo);
		$mdDialog.hide(vm.todo);
	};
	vm.cancel = function() {console.log('cancelling'); $mdDialog.cancel();};
}