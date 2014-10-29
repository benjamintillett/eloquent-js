function Vector(x,y) {
	this.x = x;
	this.y = y;

	this.plus = function(vector){
		return new Vector(this.x + vector.x, this.y + vector.y);
	}
}

Vector.prototype.minus = function(vector){
	return new Vector(this.x - vector.x, this.y - vector.y);
}
