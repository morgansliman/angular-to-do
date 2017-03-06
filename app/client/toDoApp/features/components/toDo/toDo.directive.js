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

function ToDoCtrl() {
	var vm = this;


}