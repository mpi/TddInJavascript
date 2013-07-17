define(["jquery", "hello-world" ], function($, hello) {

	describe("hello-world", function() {

		var helloDiv = $("<div id='hello'/>");
		
		it("has a button", function() {

			// given:
			// when:
			hello.loadTo(helloDiv);
			// then:
			expect(helloDiv.find("a").text()).toEqual("Hello!");

		});

	});
});
