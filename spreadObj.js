const obj1 = { a: 1, b: 1, f: 1 };
const obj2 = { c: 2, d: 2, f: 2 };
const obj3 = { e: 3, f: 3 };
const combinedObj = {
  a: 0,
  ...obj1,
  b: 0,
  c: 0,
  ...obj2,
  d: 0,
  e: 0,
  ...obj3,
  f: 0
};
console.log(combinedObj);