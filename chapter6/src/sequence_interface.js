
function ArraySeq(array){
	
	this.array = array;
	this.counter = 0;

	this.first = function(){
		return this.array[0]; 
	};

	this.current = function() {
		return this.array[this.counter]
	}

	this.next = function(){
		this.counter += 1
		return this.array[this.counter];
	};

	this.length = function(){
		return this.array.length;
	};

}


function arraylogFive(array){
	for(var i = 0; i < 5; i++){
		if(array[i] != undefined) console.log(array[i])
	}
}

function logFive(arraySeq){
	for(var i = 0; i < 5; i++){
	    if(i >= arraySeq.length()) return;
	    console.log(arraySeq.current());
		arraySeq.next();
	}
}



// logFive(new ArraySeq([1, 2]));

// logFive(new ArraySeq([1,2,4,8,5,3,5]));


function RangeSeq(start,finish){
	this.start = start;
	this.counter = 0;
	
	this.length = function(){
		return finish - start	
	} 

	this.first = function(){
		return this.start;
	}
	
	this.next = function(){
		this.counter += 1;
		return this.start + this.counter;
	}

	this.current = function(){
		return this.start + this.counter;
	}

}

logFive(new RangeSeq(4,22));










