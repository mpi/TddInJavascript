define(["jquery", "todo-ui", "todo-list", "todo-item"], function($, TodoListUi, TodoList, TodoItem) {

			describe("TodoListUi",function() {

			var container;
			var list;	
			var todo;
			
			beforeEach(function(){
				
				list = new TodoList();
				container = $("<div/>")
					.append($("<input type='text' id='todoInput'/>"))
					.append($("<a href='#' id='todoAdd'/>"));

				todo = new TodoListUi(list);
			});
			
			it("should fill todo-list component", function() {
				// given:
				list.addItem(new TodoItem("Only Item"));

				// when:
				todo.loadTo(container);

				// then:
				expect(element("li").text()).toEqual("Only Item");
			});

			it("should fill todo-list component and set default status", function() {
				// given:
				var doneItem = new TodoItem("Only Item");
				doneItem.toggleStatus();
				list.addItem(doneItem);

				// when:
				todo.loadTo(container);

				// then:
				expect(element(
						"input[type='checkbox']").val()).not
						.toBeFalsy();
			});

			it("should add item to the list when the button add is clicked", function() {

				// given:
				todo.loadTo(container);

				// when:
				simulateAddingItem("Only Item");
				
				// then:
				expect(element("li").text()).toEqual("Only Item");
			});
			
			it("should add item only once", function() {

				// given:
				todo.loadTo(container);

				// when:
				simulateAddingItem("Item 1");
				simulateAddingItem("Item 2");
				
				// then:
				expect(element("li").size()).toEqual(2);
			});
			
			it("should clear input after add", function() {
				// given:
				todo.loadTo(container);

				// when:
				simulateAddingItem("Item 1");
				
				// then:
				expect(element("#todoInput").val()).toEqual("");
			});
			
			it("prevents from adding empty to-do task", function() {

				// given:
				todo.loadTo(container);
				
				// when:
				simulateAddingItem("");
				
				// then:
				expect(element("li").size()).toEqual(0);
			});
			
			it("enables editing todo item on doble click", function() {
				
				// given:
				list.addItem(new TodoItem("Misspelled"));
				todo.loadTo(container);
				
				// when:
				element("li span").dblclick();
				
				// then:
				expect(element("li input[type='text']").val()).toEqual("Misspelled");
				expect(element("li input[type='text']").css("display")).not.toEqual("none");
				expect(element("li span").css("display")).toEqual("none");
			});
			
			it("should get focus after double click", function() {


				// given:
				list.addItem(new TodoItem("Misspelled"));
				todo.loadTo(container);
				
				// when:
				container.appendTo($("body"));
				element("li span").dblclick();
				
				// then:
				expect(element("li input[type='text']").is(":focus")).toBeTruthy();
				container.detach();
			});
			
			it("disable editing when lose focus", function() {
				
				// given:
				list.addItem(new TodoItem("Misspelled"));
				todo.loadTo(container);
				
				// when:
				element("li span").dblclick();
				element("li input").blur();
				
				// then:
				expect(element("li input[type='text']").css("display")).toEqual("none");
				expect(element("li span").css("display")).not.toEqual("none");
			})
			
			
			function element(selector){
				return $(container).find(selector);
			};
			
			function simulateAddingItem(text){
				$(container).find("#todoInput").val(text);
				$(container).find("#todoAdd").click();
			};
		});
});