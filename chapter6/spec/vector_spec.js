describe("vector", function() {

	beforeEach(function(){
		vector1 = new Vector(1,2);
		vector2 = new Vector(3,4);
	})


	it("has a x attribute",function(){
		expect(new Vector(1,2).x).toEqual(1);
	})

	it("has a y attribute",function(){
		expect(new Vector(1,2).y).toEqual(2);
	})

	it("can add two vectors",function(){
		var vector_addition_result_to_string = JSON.stringify(vector1.plus(vector2))
		var expeted_vector_string = JSON.stringify({ x: 4 ,y: 6 })
		expect(vector_addition_result_to_string).toEqual(expeted_vector_string)
	})

	it("can subtract to vectors",function(){
		var vector_subtraction_result_to_string = JSON.stringify(vector1.minus(vector2))
		var expeted_vector_string = JSON.stringify({ x: -2 ,y: -2 })
		expect(vector_subtraction_result_to_string).toEqual(expeted_vector_string)
	})

})