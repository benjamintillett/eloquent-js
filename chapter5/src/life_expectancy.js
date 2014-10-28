ancestry = JSON.parse(ANCESTRY_FILE)

function centuryOfDeath(person) {
	return Math.ceil(person.died / 100)
}

function ageAtDeath(person) {
	return person.died - person.born
}


var ageOfDeathByCentury = {};

ancestry.forEach(function(person){
	if(ageOfDeathByCentury[centuryOfDeath(person)])
		ageOfDeathByCentury[centuryOfDeath(person)] = ageOfDeathByCentury[centuryOfDeath(person)].concat(ageAtDeath(person))
	else
	 	ageOfDeathByCentury[centuryOfDeath(person)] = [ageAtDeath(person)]
})

function average(array){
	function plus(a,b){ return a + b; }
	return array.reduce(plus)/ array.length;
}

averageAgeOFDeathBYCentury = {};


for(century in ageOfDeathByCentury) {
	averageAgeOFDeathBYCentury[century]	= average(ageOfDeathByCentury[century])
}
