// ANCESTRY_FILE = require("../ancestors.js")
ancestry = JSON.parse(ANCESTRY_FILE)


describe("life expectancey",function(){

	it("knows the century of death",function(){
		expect(centuryOfDeath(ancestry[0])).toEqual(20);
	});

	it("can work out a persons age at death",function(){
		expect(ageAtDeath(ancestry[0])).toEqual(73)
	})

	it("make a hash of people ageAtDeath by centurary",function)

})

