function reverseArray(array){
		var result = [];
		array.forEach(function(elt){
			result.unshift(elt);
		});
		return result;
}

function reverseArrayInPlace(array){
	reverse_array = reverseArray(array)
	for(var i = 0; i < array.length; i++){
		array[i] = reverse_array[i];
	}
}