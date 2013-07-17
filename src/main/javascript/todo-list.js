define(["underscore"], function(_){
	
	var constructor = function() {

		var _items=[];
		
		var items = function() {
			return _items;
		};
		
		var addItem=function(itemToAdd) {
			_items.push(itemToAdd);
		};
		
		var deleteItem=function(itemToRemove) {
			_items = _(_items).without(itemToRemove);
		};
		
		var filterItems = function(filter){
			return function(){
				return _(_items).filter(filter);
			};
		}; 
		
		return {
			items: items,
			doneItems: filterItems(function(item){ return item.status();}),
			todoItems: filterItems(function(item){ return item.status() === false;}),
			addItem: addItem,
			deleteItem: deleteItem, 
			itemsLeft: function() {return this.todoItems().length;}
		};
	};
	
	return constructor;
});