[1,2,3]

function reverseArray(array){
		var result = [];
		array.forEach(function(elt){
			result.unshift(elt);
		});
		return result;
}

function arrayToList(array) {
	var list;
	reverseArray(array).forEach(function(elt){
		var temp = {};
		temp["value"] = elt;
		if(list) temp["rest"] = list
		list = temp
	})
	return list
}

console.log(arrayToList([1,2,3]))

function listToArray(list) {
	var array = [list["value"]];
	do {
		temp = list["rest"]
		list = temp
		array.push(list["value"])
	}
	while(list["rest"]);
	return array;
}

console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3 } } }))

function prepend(item, list) {
	return { value: item, rest: list }
}

function nth(number, list) {
	if(number === 0){
		return list["value"]
	}
	return nth(number-1, list["rest"])
}



