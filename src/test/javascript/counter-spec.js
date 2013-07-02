define([ "jquery", "counter" ], function($, counter) {

	describe("counter", function() {

		var counterDiv;

		beforeEach(function(){
			counterDiv = $("<div/>");
		});
		
		it("starts from 0", function() {
			
			// given:
			// when:
			counter.loadTo(counterDiv);
			// then:
			expect(counterDiv.find("#count").text()).toEqual("0");
		});

		it("increments by 1", function() {

			// given:
			counter.loadTo(counterDiv);
			// when:
			counterDiv.find('#next').click();
			// then:
			expect(counterDiv.find("#count").text()).toEqual("1");
		});

		it("increments by 1 twice", function() {

			// given:
			counter.loadTo(counterDiv);
			// when:
			counterDiv.find('#next').click();
			counterDiv.find('#next').click();
			// then:
			expect(counterDiv.find("#count").text()).toEqual("2");
		});
	});
});
