describe("sum_range",function(){
	it("can produce a range", function(){
		expect(range(1,4)).toEqual([1,2,3,4]);
	})

	it("can sum a range",function(){
		expect(sum_range([1,2,3,4])).toEqual(10);
	})

})

