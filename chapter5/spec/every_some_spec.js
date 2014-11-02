describe("every some",function(){
	it("knows every element in [NaN, NaN, NaN] are not numbers	",function(){
		expect(every([NaN, NaN, NaN], isNaN)).toBe(true);
	});
	it("knows [NaN, NaN, 4] contains numbers", function(){
		expect(every([NaN, NaN, 4], isNaN)).toBe(false);
	});

	it("knows that some of [NaN, 3, 4] are not numbers",function(){
		expect(some([NaN, 3, 4], isNaN)).toEqual(true);
	});

	it("knows that all of [2, 3, 4] are not numbers",function(){
		expect(some([2, 3, 4], isNaN)).toEqual(false);
	});


});