angular
	.module('toDoApp.component.toDo')
	.directive('toDo', ToDo);

function ToDo() {
	return {
		restrict:         'E',
		scope:            {
			content: '='
		},
		templateUrl:      '/toDoApp/features/components/toDo/toDo.html',
		controller:       ToDoCtrl,
		controllerAs:     'ToDoVM',
		bindToController: true
	};
}

function ToDoCtrl(api) {
	var vm = this;

	vm.delete = function (todo) {
		console.log('Deleting todo:', todo);
		api.deleteTodo(todo);
	};

	vm.update = function (todo) {
		todo.completed = !todo.completed;
		console.log('Updating todo:', todo);
		api.updateTodo(todo);
	}
}