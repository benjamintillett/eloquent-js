var rabbit = {};
rabbit.speak = function(line){
	console.log("the rabbit says " + line)
}
// rabbit.speak("Im alive")

function speak(line){
	console.log("the " + this.type + " rabbit still says " + line)
}

var whiteRabbit = { type: "white", speak: speak };
var fatRabbit = { type: "fat", speak: speak };

// whiteRabbit.speak("Oh my ears and whiskers how late its getting");
// fatRabbit.speak("I could sure use a carrot right now");


// speak.apply(fatRabbit, ["burp"]);
// speak.call({type: "old"}, "oh my");


// var empty = {};
// console.log(empty.toString);
// var empty = {};
// console.log(empty.toString());

// console.log(Object.getPrototypeOf({}) ==
	// Object.prototype);

// console.log(Object.getPrototypeOf(Object.prototype));

var protoRabbit = {
	speak: function(line){
		console.log("The " + this.type + " rabbit says " + line);
	}
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
// killerRabbit.speak("SKKKREEEE");


function Rabbit(type){
	this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

// console.log(blackRabbit.type)

Rabbit.prototype.speak = function(line){
	console.log("The " + this.type + " rabbit says " + line);
};

// blackRabbit.speak("Doom....")

// console.log(Array.prototype.toString == Object.prototype.toString)






