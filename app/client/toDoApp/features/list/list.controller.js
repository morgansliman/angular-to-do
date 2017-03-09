angular
	.module('toDoApp.list')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(api, $mdDialog) {
	var vm = this;

	vm.todos = api.todos;

	vm.showAdd = function(ev) {
		$mdDialog.show({
			         template: '<md-dialog aria-label="New To-do" layout-padding layout-margin flex-gt-sm="40"><new-todo-dialog></new-todo-dialog></md-dialog>',
			         targetEvent: ev,
		         })
		         .then(function(answer) {
			         console.log('You said the information was', answer, '.');
		         }, function() {
			         console.log('You cancelled the dialog.');
		         });
	};
}