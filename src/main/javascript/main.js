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

require(["hello-world"], function(hello) {

		hello.loadTo("#hello");
});
