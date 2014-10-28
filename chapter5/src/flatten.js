

function flatten(array) {
	return array.reduce(function(count,value){
		return count.concat(value);
	},[]);
}

