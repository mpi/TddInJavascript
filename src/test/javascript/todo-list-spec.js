define(["jquery", "todo-list", "todo-item"], function($, TodoList, TodoItem) {

	describe("TodoList", function() {

		it("is empty by default", function() {
			// given:
			var list = new TodoList();
			// when:
			// then:
			expect(list.items().length).toBe(0);
		});

		it("has one item if one added", function() {
			// given:
			var list = new TodoList();
			var item = new TodoItem();
			// when:
			list.addItem(item)
			// then:
			expect(list.items()).toEqual([item]);
		});

		it("lists done tasks only", function() {

			// given:
			var list = new TodoList();
			var done1 = doneItem();
			var done2 = doneItem();

			list.addItem(done1);
			list.addItem(new TodoItem());
			list.addItem(done2);

			// when:
			var result = list.doneItems();

			// then:
			expect(result).toEqual([done1, done2]);
		});

		it("lists todo tasks only", function() {

			// given:
			var list = new TodoList();
			var todo1 = todoItem();
			var todo2 = todoItem();

			list.addItem(todo1);
			list.addItem(doneItem());
			list.addItem(todo2);

			// when:
			var result = list.todoItems();

			// then:
			expect(result).toEqual([todo1, todo2]);
		});

		it("should know how many items left", function() {

			// given:
			var list = new TodoList();

			list.addItem(todoItem());
			list.addItem(doneItem());
			list.addItem(todoItem());

			// when:
			var result = list.itemsLeft();

			// then:
			expect(result).toEqual(2);
		});

		it("should delete item", function() {

			// given:
			var list=new TodoList();
			
			var item1=new TodoItem();
			var item2=new TodoItem();
			
			list.addItem(item1);
			list.addItem(item2);
					
			// when:
			list.deleteItem(item2);
			
			// then:
			expect(list.items()).toEqual([item1]);
		});
		
		function doneItem() {
			var done = new TodoItem();
			done.toggleStatus();
			return done;
		}
		
		function todoItem() {
			var todo = new TodoItem();
			return todo;
		}
	});
});