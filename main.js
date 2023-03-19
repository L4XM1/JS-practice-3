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

//Set (values)
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

//Map (key:value pairs)
let myMap = new Map([
  ["a1", "Hello"],
  ["b2", "Goodbye"],
]);

myMap.set("c3", "Foo");
myMap.delete("a1");
console.log(myMap.size);

//WeakSet (objects - value)
let carWeakSet = new WeakSet();

let car1 = {
  make: "Honda",
  model: "Civic",
};

carWeakSet.add(car1);

let car2 = {
  make: "Toyota",
  model: "Camry",
};

carWeakSet.add(car2);
carWeakSet.delete(car1);

console.log(carWeakSet);

//WeakMap (objects - key: value)
let carWeakMap = new WeakMap();

let key1 = {
  id: 1,
};

let testCar1 = {
  make: "Honda",
  model: "Civic",
};

let key2 = {
  id: 2,
};

let testCar2 = {
  make: "Toyota",
  model: "Camry",
};

carWeakMap.set(key1, testCar1);
carWeakMap.set(key2, testCar2);

carWeakMap.delete(key1);

console.log(carWeakMap);
