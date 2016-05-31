Array.prototype.uniqueDates = function() {
  var u = [];

  for (k=0; k<this.length; k++) {
    var currentDate = new Date(this[k].annum);
    if (u.map(Number).indexOf(+currentDate) < 0) {
      u.push(currentDate);
    }
  }
  return u;
};

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
