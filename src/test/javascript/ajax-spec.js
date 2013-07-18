define(["jquery", "sinon"], function($, sinon) {

	describe("AjaxSpec", function() {
		
		xit("mocks ajax request", function() {

			// given:
			var server = sinon.fakeServer.create();

			var resp = null;
			$.getJSON("/content", function(json){
				resp = json;
			});
			
			// when:
			server.respondWith("GET", "/content", [200, { "Content-Type": "application/json" }, JSON.stringify({"message": "Hello Ajax!"})]);
			server.respond();

			// then:
			expect(resp).toEqual({"message": "Hello Ajax!"});
		});
		
	});
});