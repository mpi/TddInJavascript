define(["jquery", "todo-item" ], function($, TodoItem) {

	describe("TodoItem", function() {

		it("has description", function() {
			// given:
			// when:
			var item = new TodoItem("Nauczyc sie TDD w JS");
			// then:
			expect(item.description()).toEqual("Nauczyc sie TDD w JS");
		});
		
		it("has changeable description", function() {

			// given:
			var item = new TodoItem("Nauczyc sie TDD w JS");
			
			// when:
			item.description("Nauczyc sie TDD w CS");
			
			// then:
			expect(item.description()).toEqual("Nauczyc sie TDD w CS");
		});
		
		it("is in todo state by default", function() {

			// given:
			// when:
			var item = new TodoItem("New activity");
			// then:
			expect(item.status()).toEqual(false);
		});
		
		it("is in done state when status toggle", function() {

			// given:
			var item = new TodoItem("New activity");
			// when:
			item.toggleStatus();
			// then:
			expect(item.status()).toEqual(true);
		});

		it("has private status", function() {
			// given:
			var item1 = new TodoItem("");
			var item2 = new TodoItem("");
			// when:
			item1.toggleStatus();
			// then:
			expect(item1.status()).toEqual(true);
			expect(item2.status()).toEqual(false);
		});
		
		it("has todo status if toggled twice", function() {
			// given:
			var item = new TodoItem("");
			// when:
			item.toggleStatus();
			item.toggleStatus();
			// then:
			expect(item.status()).toEqual(false);
		});
	});
});