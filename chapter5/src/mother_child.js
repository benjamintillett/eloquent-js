// ANCESTRY_FILE = require("../ancestors.js")

var ancestry = JSON.parse(ANCESTRY_FILE)


function average(array){
	function plus(a,b) { return a + b; }
	return array.reduce(plus)/ array.length;
}

var byName = {};
ancestry.forEach(function(person){
	byName[person.name] = person;
});


function getMother(child){
	return byName[byName[child]["mother"]];
}

function average(array){
	function plus(a,b){ return a + b; }
	return array.reduce(plus)/ array.length;
}

function ageOfMotherWhenBorn(child){
     if (getMother(child) === undefined) return undefined;
	 return byName[child]["born"] - getMother(child)["born"]
}

function hasMother(child){
	return byName[child.mother] != undefined
}

function averageAge(ancestry) {
	ages = ancestry.map(function(person){
		return ageOfMotherWhenBorn(person.name)
	})
	ages = ages.filter(Boolean)
	return Math.round( average(ages) * 10 ) / 10;
}


console.log(averageAge(ancestry))