ancestry = JSON.parse(ANCESTRY_FILE)
carolus_haverbeke = JSON.parse('{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}')
maria_van_brussel = JSON.parse('{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}')
motherless_child = JSON.parse('{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}')

describe('mother child age gap', function(){


	it("can get the mother object of a child",function(){
		expect(getMother("Carolus Haverbeke")).toEqual(maria_van_brussel)
	});

	it("knows the diference in age between a mother and her child",function(){
		expect(ageOfMotherWhenBorn("Carolus Haverbeke")).toEqual(31);
	});

	it("can filter out chilren with no mother object",function(){
		expect([maria_van_brussel,motherless_child].filter(hasMother)).toEqual([maria_van_brussel])
	});

	it("can find the average of an array",function(){
		expect(average([1,2,3,4])).toEqual(2.5)
	});

	it("can work out the average age of the mothers at birth",function(){
		expect(averageAge(ancestry)).toEqual(31.2);
	});


});