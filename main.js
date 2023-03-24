"use strict";

//Let and Const Declaration
var a = "Test1";
var b = "Test2";

function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a); //50
  }
  console.log(a); //50
}

testVar();

function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a); //50
  }
  console.log(a); //30
}

testLet();

for (var i = 0; i < 10; i++) {
  //if we use let, it will log 0 through 9 and if we try to log it outside of this scope, it gives an error
  console.log(i); // 9
}

console.log(i);
// Since i is declared with the var keyword, it has function scope, which means that it is accessible both inside and outside of the loop. Therefore, the final console.log statement will log the value of i after the loop has completed, which will be 10.

const colors = [];

colors.push("red");
colors.push("blue");

console.log(colors);

// colors = "Green"; //TypeError: Assignment to constant variable.

//Classes and Inheritance

class User {
  constructor(username, email, password) {
    //method that will run when the obj is created
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers() {
    //the same no matter what, so it can be a static method, we don't have to instantiate it
    console.log("There are 50 users");
  }

  register() {
    console.log(this.username + " is now registered");
  }
}

let bob = new User("bob", "bob@email.com", "123456"); //instance of bob obj

bob.register(); //using the object by calling a method

User.countUsers();

//Inheritance

class Member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password); //same as writing this.
    this.package = memberPackage;
  }
  getPackage() {
    console.log(
      this.username + " is subscribed to the " + this.package + " package"
    );
  }
}

let mike = new Member("mike", "mike@gmail.com", "123", "Standard");
mike.getPackage();

//Template Literals

let name = "John";

function makeUppercase(word) {
  return word.toUpperCase();
}

let templateString = `<h1>${makeUppercase("Hello")}, ${name}</h1>
<p>This is a simple template in JS</p>`;

document.getElementById("templateString").innerHTML = templateString;

//New String & Number Methods

let theString = "Hello, my name is Marta and I love JS";

console.log(theString.startsWith("Hello"));
console.log(theString.endsWith("JS"));
console.log(theString.includes("loves"));

//Number Methods

//Hex
console.log(0xff);
//Binary
console.log(0b101011);
//Octal
console.log(0o543);

console.log(Number.isFinite(Infinity));
console.log(Number.isNaN("hey"));
console.log(Number.isInteger(-2));

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

//Generators (functions that can be paused and resumed as many times we like - at each pause it can give back(yield) a value (similar to return, but it's just paused))

function* g1() {
  console.log("Hello");
  yield "Yield 1 Ran..";
  console.log("World");
  yield "Yield 2 Ran..";
  return "Returned...";
}

var g = g1();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next()); //haven't used .value so I can see that it is yielding an object and that done property is set to true (because in order for it not to be false we have to return something)

for (let val of g) {
  console.log(val); //doesn't give a return value
}
