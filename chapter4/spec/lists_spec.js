describe("lists", function(){

	it("can turn an array into a list", function(){
		expect(arrayToList([1,2])).toEqual({value: 1, rest: { value: 2 }})
	});

	it("can turn a list into a array", function(){
		expect(listToArray({value: 1, rest: {value: 2}})).toEqual([1,2])
	});

	it("can prepend to a list", function(){
		expect(prepend(4, { value: 1, rest: {value: 2} })).toEqual( { value: 4, rest: {value: 1, rest: {value: 2} } })
	});

	it("can return the nth number", function(){
		expect(nth(1,{ value: 4, rest: {value: 1, rest: {value: 2} } })).toEqual(1);
	});
});