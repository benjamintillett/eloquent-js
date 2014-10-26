function countBs(string,chr) {
	var count = 0;
	for(var i = 0; i < string.length; i++){
		if(string[i] === chr) count += 1;
	}
	return count
}