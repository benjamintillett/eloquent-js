describe("reversing array",function(){

	it("can reverse an array",function(){
		expect(reverseArray([1,2,3,4])).toEqual([4,3,2,1]);
	});
	it("can reverse an array in place",function(){
		var array = [1,2,3,4];
		reverseArrayInPlace(array)
		expect(array).toEqual([4,3,2,1])
	});
});