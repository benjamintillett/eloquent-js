function power(base, exponent) {
	if(exponent == 0)
		return 1;
	else
		return base * power(base, exponent - 1);
}

console.log(power(2,3));

function findSolution(target){
	function find(start,history){
		if (start == target)
			return history;
		else if (start > target)
			return null;
		else
			return find(start + 5, "(" + history + " + 5)") ||
				   find(start * 3, "(" + history + " * 3" );

	}
	return find(1, "1")
}

console.log(findSolution(24));


printFarmInventory(7,11,3);

function zeroPad(number, width) {
	var string = String(number);
	while(string.length < width) 
		string = "0" + string;
	return string;
}

function printFarmInventory(cows,chickens,pigs) {
	console.log(zeroPad(cows,3) + " Cows")
	console.log(zeroPad(chickens,3) + " Chickens")
	console.log(zeroPad(pigs,3) + " Pigs")
}






