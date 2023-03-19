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

// Arrow Functions (benefits: shorter syntax and we can bind "this" lexically)

// function Prefixer(prefix) {
//   this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function (arr) {
//   let that = this;
//   return arr.map(function (x) {
//     console.log(that.prefix + x);
//   });
// };

// let pre = new Prefixer("Hello ");
// pre.prefixArray(["Brad", "Jeff"]);

function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  return arr.map((x) => {
    console.log(this.prefix + x);
  });
};

let pre = new Prefixer("Hello ");
pre.prefixArray(["Brad", "Jeff"]);

// let add = function (a, b) {
//   let sum = a + b;
//   console.log(sum);
//   return false;
// };

// add(2, 2);

let add = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return false;
};

add(12, 2);

//Promises (obj used for deferred and async /operation that hasn't completed yet but is expected in the future)

//Immediatley Resolved
var myPromise = Promise.resolve("Foo");

myPromise.then((res) => console.log(res));

var mySecondPromise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 2000);
});

mySecondPromise.then((res) => {
  res += 3;
  console.log(res);
});

//fetch data from an API
function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}

getData("GET", "https://jsonplaceholder.typicode.com/todos")
  .then(function (data) {
    let todos = JSON.parse(data);
    let output = "";
    for (let todo of todos) {
      output += `
      <li>
        <h3>${todo.title}</h3>
        <p>${todo.completed}</p>
      </li>
      `;
    }
    document.getElementById("template").innerHTML = output;
  })
  .catch(function (err) {
    console.log(err);
  });
