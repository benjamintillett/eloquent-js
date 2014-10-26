function range(start,end, increment) {
	var result = [];
	for(var i = start; i <= end; i += increment){
		result.push(i)
	}
	return result
}

function sum(range) {
	var result = 0;
	range.forEach(function(elt) {
		result += elt
	});
	return result;
}

