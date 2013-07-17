define(["underscore"], function(_){
	
	var constructor = function(x) {

		var _status = false;
		var _description = x;
		
		var toggleStatus = function(){
			
			if(_status===false) 
				_status = true;
			else 
				_status=false;
		};
		
		var status=function() {
			return _status;
		};

		var description = function(newDescription){
			
			if(!_(newDescription).isUndefined()){
				_description = newDescription;
			} 
			return _description; 
		};
		
		return {
			description: description,
			status: status,
			toggleStatus: toggleStatus
		};
	};
	
	return constructor;
});