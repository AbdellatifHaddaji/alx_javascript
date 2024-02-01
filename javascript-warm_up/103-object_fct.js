#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
// Output: { type: 'object', value: 12 }

myObject.incr = function () {
  this.value++;
};
myObject.incr();
console.log(myObject);
// Output: { type: 'object', value: 13 }

myObject.incr();
console.log(myObject);
// Output: { type: 'object', value: 14 }

myObject.incr();
console.log(myObject);
// Output: { type: 'object', value: 15 }

