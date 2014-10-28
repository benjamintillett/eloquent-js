ANCESTRY_FILE = require("./ancestors.js")

function forEach(array,action){
	for (var i = 0; i < array.length; i++)
		action(array[i]);
}	



function greaterThan(n){
	return function(m){ return m > n}
}

var greaterThan10 = greaterThan(10);



function noisy(f){
	return function(arg){
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "-got", val);
		return val
	}
}

function unless (test,then) {
	if (!test) then();
}


function filter(array, test) {
	var passed = [];
	for(var i = 0 ; i < array.length; i++){
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

var ancestry = JSON.parse(ANCESTRY_FILE);

// console.log(filter(ancestry,function(person){
// 	return person.born > 1900 && person.born < 1925;
// }));

function map(array,transform){
	var mapped = [];
	for(var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

var overNinety = ancestry.filter(function(person){
	return person.died - person.born > 90;
})

console.log(map(overNinety, function(person){
	return person.name;
}));


function reduce(array,combine, start){
	var current = start;
	for(var i = 0; i < array.length; i++)
		current = combine(current,array[i]);
	return current;
}

// console.log(ancestry.reduce(function(min,cur){
// 	if(cur.born < min.born) return cur;
// 	else return min;
// }));

function average(array){
	function plus(a,b){ return a + b; }
	return array.reduce(plus)/ array.length;
}

function age(p){ return p.died - p.born; }
function male(p){ return  p.sex == "m"}
function female(p){ return p.sex == "f"}

console.log(average(ancestry.filter(male).map(age)));

var byName = {};

ancestry.forEach(function(person){
	byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donal Duck"];
function isInSet(set,person){
	return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person){
	return isInSet(theSet,person)
}));








