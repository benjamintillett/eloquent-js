function Fizzbuzz() {

	this.isDivisibleByThree = function(number){
		return number % 3 === 0;
	};
	
	this.isDivisibleByFive = function(number){
		return number % 5 === 0;
	};
	
	this.isDivisibleByFifteen = function(number){
		return number % 15 === 0;
	};

	this.fizzbuzz = function(number) {
		if(this.isDivisibleByFifteen(number)) return "fizzbuzz";
		if(this.isDivisibleByThree(number)) return "fizz";
		if(this.isDivisibleByFive(number)) return "buzz";
		return number;
	};

	this.print_upto = function(number) {
		for(i = 0 ; i < number ; i ++)
			console.log(this.fizzbuzz(i))
	};
}

fizzbuzz = new Fizzbuzz();

fizzbuzz.print_upto(100);