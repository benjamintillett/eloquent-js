describe("sum_range",function(){
	it("can produce a range", function(){
		expect(range(1,4)).toEqual([1,2,3,4]);
	})

	it("can sum a range",function(){
		expect(sum([1,2,3,4])).toEqual(10);
	})

	it("know the sum of the range 1..10 is 55",function(){
		expect(sum(range(1,10))).toEqual(55);
	});

	it("can create a range with increments of 2",function(){
		expect(range(1,11,2)).toEqual([1,3,5,7,9,11])
	})
	it("can crete a range with increments of -1",function(){
		expect(range(4,1,-1)).toEqual([4,3,2,1])
	})

})
