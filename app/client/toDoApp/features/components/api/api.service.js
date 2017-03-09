angular
	.module('toDoApp.component.api')
	.service('api', ApiService);

function ApiService($http) {

	function getTodos() {
		$http(
			{
				method: 'GET',
				url:    '/api/todos'
			}
		)
			.then(function (response) {
				angular.copy(response.data, handler.todos);
			});
	}

	function createTodo(todo) {
		// create locally first
		handler.todos.push(todo);
		$http(
			{
				method: 'POST',
				url:    '/api/todo',
				data: todo
			}
		)
			.then(function () {
				handler.getTodos();
			});
	}

	function updateTodo(todo) {
		$http(
			{
				method: 'PUT',
				url:    '/api/todo',
				data: todo
			}
		)
			.then(function () {
				handler.getTodos();
			});
	}

	function deleteTodo(todo) {
		// delete locally first
		angular.forEach(handler.todos, function (val, i) {
			if (angular.equals(val.id, todo.id)) {
				handler.todos.splice(i, 1);
			}
		});

		$http(
			{
				method: 'DELETE',
				url:    '/api/todo',
				data: todo
			}
		)
			.then(function () {
				handler.getTodos();
			});
	}

	function clearCompleted() {
		// delete locally first
		angular.forEach(handler.todos, function (val, i) {
			if (val.completed) {
				handler.todos.splice(i, 1);
			}
		});

		$http(
			{
				method: 'DELETE',
				url:    '/api/clear'
			}
		)
			.then(function () {
				handler.getTodos();
			});
	}

	var handler = {
		todos:          [],
		getTodos:       getTodos,
		createTodo:     createTodo,
		updateTodo:     updateTodo,
		deleteTodo:     deleteTodo,
		clearCompleted: clearCompleted
	};

	handler.getTodos();

	return handler;
}