Array.prototype.removeDuplicateDates = function() {
  var u = [];
	
	for ( var i = 0; i < this.length; i++ ) {
	  var current = new Date(this[i]);
		if ( u.map(Number).indexOf(+current) < 0 ) {
		  u.push(current);
		}
	}
	return u;
}
