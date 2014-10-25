describe("Fizzbuzz" , function(){
	
	beforeEach(function(){
		fizzbuzz = new Fizzbuzz();
		console.log(fizzbuzz)
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
});