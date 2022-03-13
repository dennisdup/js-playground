function makeAdder(a) {
    return function(b) {
      return a + b;
    };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
console.log(add5(6)); 
console.log(add20(7)); 

// var add9 = makeAdder(9);
// var add3 = makeAdder(3);

// console.log(add9(9)); 
// console.log(add3(3)); 


const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter}
})();

// console.log( add() );
// console.log( add() );
// console.log( add() );