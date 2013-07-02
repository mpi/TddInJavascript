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

require(["hello-world", "counter"], function(hello, counter) {

		hello.loadTo("#hello");
		counter.loadTo("#counter");

});
