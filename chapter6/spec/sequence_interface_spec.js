describe("ArraySeq",function(){

	beforeEach(function(){
		seq = new ArraySeq([1,6,4,3]);
	})


	it("can return it first element", function(){
		expect(new ArraySeq([1,2,3]).first()).toEqual(1);
	})
	
	it("can return the next element",function(){
		seq.next()
		expect(seq.next()).toEqual(4);
	})

	it("return the current elt in a array",function(){
		expect(seq.current()).toEqual(1);	
	})

	it("knows the lenght of its array", function(){
		expect(seq.length()).toEqual(4);
	})

})

describe("RangeSeq",function(){
	
	beforeEach(function(){
		seq = new RangeSeq(1,7)
	});
	
	it("can return it first element", function(){
		expect(seq.first()).toEqual(1);
	});

	it("can return the next element", function(){
		seq.next()
		expect(seq.next()).toEqual(3);
	});


	it("returns the current elt in the range", function(){
		expect(seq.current()).toEqual(1);
	})

	it("knows the legth of the range", function(){
		expect(seq.length()).toEqual(6);
	});

})