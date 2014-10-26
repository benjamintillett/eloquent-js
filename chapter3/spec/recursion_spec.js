describe("isEven",function(){

	it("knows 0 is even",function(){
		expect(isEven(0)).toBe(true);
	});

	it("knows 1 is not even",function(){
		expect(isEven(1)).toBe(false);
	});

	it("knows 2 is even",function(){
		expect(isEven(2)).toBe(true);
	});

	it("knows 31 is not even",function(){
		expect(isEven(31)).toBe(false);
	});
	it("knows 102 is even",function(){
		expect(isEven(102)).toBe(true);
	});

});