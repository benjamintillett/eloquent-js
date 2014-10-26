describe("minimum", function(){
	it("passed 1 and 2 returns 1",function(){
		expect(minimum(1,2)).toEqual(1);
	});
	it("passed 5 and -10 returns -10",function(){
		expect(minimum(5,-10)).toEqual(-10);
	})
});