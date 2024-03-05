// === for loop && generally about loops

var array = ["a", "b", "cc"]; // fn([...array])
array.forEach((element) => {
  console.log(element);
});

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}
var counter = 0;
while (counter < 10) {
  console.log(Date());
  counter++;
}

do {
  console.log("Print me at least once!");
  counter--;
} while (counter > 0);

// var command = prompt("How many times do need to repeat?");

// do {
//   console.log("I am printing this for " + command + " times.");
//   command--;
// } while (command > 0);

// === continue & break
var numbers = [11, 3, 134, 70, 21, 44];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 7 !== 0) continue;
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 7 == 0) {
    console.log("Found: " + numbers[i]);
    break;
  }
}

// === value or reference | variable "primitive" / object {key:value}
var a = 11;
var b = a; // copy value

a = 2233;

console.log("a : " + a);
console.log("b : " + b);

// reference
var shoes = {
  name: "Jordan 11",
  price: 320,
};

var shoes2 = shoes;

shoes.name = "Garnett"; // reference
shoes.price = 733; // reference

console.log(shoes.name + " : " + shoes.price);
console.log(shoes2.name + " : " + shoes2.price); // referring

// array is an object | ref appects same on arrays.

var price = 2300;
console.log("Price was: " + price);
function modifyPrice(price) {
  console.log("Price was inside: " + price);
  price = price - 1500;
  console.log("Price becomes inside ========= : " + price);
}
modifyPrice(price);
console.log("Price becomes: " + price); // same result

var product = {
  name: "Shoes",
  price: 2300,
};
console.log("Price was: " + product.price);
modifyPrice(product.price);
console.log("Price becomes: " + product.price); // same result

console.log("Price was: " + product.price);
function modifyObjectPrice(obj) {
  console.log("Price was inside: " + obj.price);
  obj.price = obj.price - 1500;
  console.log("Price becomes inside ========= : " + obj.price);
}
modifyObjectPrice(product);
console.log("Price becomes: " + product.price); // modified result

// === typeof
console.log(typeof product);
console.log(typeof price);
console.log(typeof array);
console.log(typeof counter);
console.log(typeof modifyObjectPrice);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 123);

// === exception handling

//let x = prompt("Your value from browser?"); // NODE: Uncaught ReferenceError ReferenceError: prompt is not defined
try {
  // do something suspecious
  // let x = prompt("Your value from input?");
} catch (error) {
  console.log("Prompt only works from browsers!");
} finally {
  console.log("Holy god!");
}

// === Math class

var arr = [];

for (let i = 0; i < 10; i++) {
  let num = Math.random() * 100;
  let floorNum = Math.floor(num);
  arr.push(floorNum);
}

console.log(arr);

// variables

var lastname = "Doeir";
// global function does not need to use object name
console.log(lastname);
console.log(window.lastname);
console.log(globalThis.lastname);

function alrt() {
  window.alert(lastname);
  globalThis.alert(lastname);
}

console.log(window);
console.log(globalThis);

// === variable scope

function greeting() {
  var friend = "Johnny";
  console.log("Hello buddy " + friend);
  function bondQuestions() {
    var secret = "Scored!";
    console.log(friend + " how was your last night?");
    console.log("Secret is : " + secret);
    function deepQuestions() {
      var doNotTell = "Sarah";
      console.log("Was this " + doNotTell + "?");
      console.log("Was this " + friend + "?");
    }
    deepQuestions();
    // greeting(); // recursive
  }
  bondQuestions();
  deepQuestions(); // ?? scope
}

greeting();
