function ChessBoard() {

	this.line = function(size){
		var line = ""
		for(var i = 0; i < size/2; i ++){
			line += "# " 
		}
		return line
	}

	this.reverse_line = function(line){
		return line.split("").reverse().join("");
	}
	this.board = function(size){
		var board = "" ;
		for(var i = 0; i < size; i++){
			if( i % 2 === 0 ) board += this.line(size) + "\n";
			if( i % 2 !== 0 ) board += this.reverse_line(this.line()) + "\n";
		}
		return board;
	}
}
