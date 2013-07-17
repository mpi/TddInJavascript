require.config({
	baseUrl : "/scripts",
	paths : {
		underscore : 'http://underscorejs.org/underscore-min',
		jquery : 'http://code.jquery.com/jquery-1.10.1.min'
		
	},
	shim : {
		underscore : {
			exports : "_"
		},
		jquery : {
			exports : "$"
		}
	}
});

require(["todo-ui", "todo-list", "jquery"], function(TodoListUi, TodoList, $) {
		var todoList = new TodoList();
		var todoUi = new TodoListUi(todoList);
		todoUi.loadTo($("#todo-list-container"));
});
