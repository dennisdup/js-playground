function makePerson(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
  }
  
  var s = makePerson('Simon', 'Willison');
//   console.log( s.fullName() ); // "Simon Willison"
//   console.log( s.fullNameReversed() ); // "Willison, Simon"
  

  function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
      return this.first + ' ' + this.last;
    };
    this.fullNameReversed = function() {
      return this.last + ', ' + this.first;
    };
  }
  var r = new Person('Simon', 'Willison');
  console.log( r.fullName() ); // "Simon Willison"
  console.log( r.fullNameReversed() ); // "Willison, Simon"