define(["underscore", "jquery", "todo-item"], function(_, $, TodoItem){
	
	var constructor = function(todoList) {

		var _container;
		var _input;
		var _add;
		
		var refresh = function(){

			_container.find("li").remove();
			
			_(todoList.items()).each(function (item) {
				var checkbox = $("<input type='checkbox'/>").val(item.status());
				var description = $("<span/>").html(item.description());
				var descriptionInput = $("<input type='text'/>").val(item.description()).hide();
				description.dblclick(function () {
					description.hide();
					descriptionInput.show();
					descriptionInput.focus();
				});
				
				descriptionInput.blur(function() {
					description.show();
					descriptionInput.hide();
				});
				_container.append($("<li/>").append(
						$("<form/>")
							.append(checkbox)
							.append(description)
							.append(descriptionInput)));
			});
			
		};
		
		var onAdd = function(){
			
			var description = _input.val();
			
			if(description !== ""){
				todoList.addItem(new TodoItem(description));
				_input.val("");
				refresh();
			}
		};
		
		var loadTo = function (container) {

			_container = container;
			_input = $(_container).find("#todoInput");
			_add = $(_container).find("#todoAdd");
			
			
			_add.click(onAdd);
			
			refresh();
		};
		
		return {
			loadTo: loadTo
		};
	};
	
	return constructor;
});