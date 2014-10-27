

describe("deep comaprison", function(){

	beforeEach(function(){
		obj = {here: {is: "an"}, object: 2};
		obj2 = {here: 1, object: 2};
		obj3 = {here: {is: "an"}, object: 2}
		obj4 = {here: {is: "an"}, object: 3}
	});

	it("knows that the same object is equal", function(){
		expect(deepEqual(obj,obj)).toBe(true);
	});

	it("knows two different object of the same type arent equal",function(){
		expect(deepEqual(obj,obj2)).toBe(false);
	});

	it("knows two obj1 and 3 are equal",function(){
		expect(deepEqual(obj,obj3)).toBe(true);
	});
	it("knows two obj1 and 4 arent equal",function(){
		expect(deepEqual(obj,obj4)).toBe(false);
	});
})