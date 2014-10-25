describe("Fizzbuzz" , function(){
	
	beforeEach(function(){
		fizzbuzz = new Fizzbuzz();
	});

	it("knows three is divisible by three", function(){
		expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
	});

	it("knows one is not divisible by three", function(){
		expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
	});

	it("knows five is divisible by five", function(){
		expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
	});

	it("knows one is not divisible by five", function(){
		expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)
	});
	it("knows fifteen is divisible by fifteen", function(){
		expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
	});

	it("knows one is not divisible by fifteen", function(){
		expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false)
	});
	it("returns fizz when passed 3",function(){
		expect(fizzbuzz.fizzbuzz(3)).toEqual("fizz")
	});

	it("returns buzz when passed 5",function(){
		expect(fizzbuzz.fizzbuzz(5)).toEqual("buzz")
	});

	it("returns fizz buzz when passed 15", function() {
		expect(fizzbuzz.fizzbuzz(15)).toEqual("fizzbuzz")
	});
	it("returns the numer if not divisible by 3,5,or 15",function(){
		expect(fizzbuzz.fizzbuzz(7)).toEqual(7)
	});

});