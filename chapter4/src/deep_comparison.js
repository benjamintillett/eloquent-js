function deepEqual(a,b) {
	console.log(a)
	console.log(b)
	if (a === b) return true;

	if(a == null || typeof(a) != "object" || b == null || typeof(b) != "object")
		return false;

	var keysInB = 0 , keysInA = 0;

	for(var key in b){
		keysInB += 1;		
	}

	for(var key in a){
		keysInA += 1;
		if(!deepEqual(a[key],b[key]) || !(key in b)){
			return false;
		}
	}
	return keysInA == keysInB;
}

obj = {here: {is: "an"}, object: 2};
obj2 = {here: 1, object: 2};
obj3 = {here: {is: "an"}, object: 2}
obj4 = {here: {is: "an"}, object: 3}

console.log(deepEqual(obj,obj3))