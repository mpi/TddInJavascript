define(["jquery"], function($) {

	var loadTo = function(element) {

		$("<a href='#'>Hello!</a>").click(function() {

			alert("Hello, World!");

		}).appendTo(element);
	};

	return {
		"loadTo": loadTo
	};

});
