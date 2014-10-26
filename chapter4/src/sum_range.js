function range(start,end, step) {
	var result = [];
	step = step || 1
	if (step < 0){
		for(var i = start; i >= end; i += step){
			result.push(i)
		}		
	}
	else{
		for(var i = start; i <= end; i += step){
			result.push(i)
		}
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

