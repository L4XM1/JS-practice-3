"use strict";

//Default Params
function greet($greeting = "Hello World") {
  console.log($greeting);
}

greet();

//Spread Operator
let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
  console.log(args1 + "," + args2);
}

// test.apply(null, args); //es5
test(...args1, ...args2);

//Set, Map, WeakSet and WeakMap

//set (values)
let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);

mySet.add("100");
mySet.add({ a: 1, b: 2 });
mySet.delete(22);
mySet.clear();
mySet.add("100");
mySet.add("200");

// console.log(mySet.size);
mySet.forEach(function (val) {
  console.log(val);
});

//map (key:value pairs)
let myMap = new Map([
  ["a1", "Hello"],
  ["b2", "Goodbye"],
]);

myMap.set("c3", "Foo");
myMap.delete("a1");
console.log(myMap.size);
