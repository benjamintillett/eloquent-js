describe("flatten",function(){
	
	beforeEach(function(){
		arrays = [[1, 2, 3], [4, 5], [6]];
	});

	it("can flatten an array of arrays",function(){
		expect(flatten(arrays)).toEqual([1, 2, 3, 4, 5, 6]);
	});
});