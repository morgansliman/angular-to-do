angular
	.module('toDoApp.component.toDo')
	.directive('toDo', ToDo);

function ToDo() {
	return {
		restrict:         'E',
		scope:            {
			toDoData: '='
		},
		templateUrl:      '/toDoApp/features/components/todo/toDo.html',
		controller:       ToDoCtrl,
		controllerAs:     'ToDoVM',
		bindToController: true
	};
}

function ToDoCtrl() {
	
}