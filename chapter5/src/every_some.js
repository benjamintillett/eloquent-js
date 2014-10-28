function every(array,predicate){
	result = true
	array.forEach(function(elt){
		if(predicate(elt) === false){
			return result = false;
		}			
	})
	return result;
}

function some(array,predicate){
	result = false
	array.forEach(function(elt){
		if(predicate(elt) === true){
			return result = true;
		}			
	})
	return result;
}
