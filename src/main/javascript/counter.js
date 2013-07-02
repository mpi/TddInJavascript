define(["jquery"], function($) {

	var counter = 0;
	var counterDiv = $("<span id='count'>" + counter + "</span>");

	var loadTo = function(element) {

		counter = 0;

		counterDiv.appendTo(element);
		
		$("<a href='#' id='next'>Next</a>")
			.click(function() {
				counter++;
				counterDiv.text(counter);
			})
			.appendTo(element);
	};

	return {
		"loadTo" : loadTo
	};

});
