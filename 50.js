// === Functional programming

// Pros: Faster for smaller projects
// Cons: Not suitable for larger projects, hard to maintain all global scopes

// === OOP

// Objects delegate real life items
// Object = data + function + inherit/extend + polymorphism + ...

// Pros: Convenient coding, easy modification, DRY, higher reusability
// Cons: Hard to define object structure ??!!

// === Example
var person1 = {
  name: "John D",
  job: "Frontend Dev",
  bio: function () {
    console.log(this.name + " " + this.job + " profession");
  },
};

person1.bio();

String.prototype.greetme = function () {
  console.log("Good evening!");
};

console.log("asdfasdf".greetme());

// === object
var matter = { name: "atom" };
matter.weight = function () {
  console.log(this.name + " have weight.");
};
var item = Object.create(matter);

item.name = "Phone";
item.func = "Call";

var animal = Object.create(matter);

animal.name = "Animal";
animal.func = function () {
  console.log("Breath");
};

var human = Object.create(animal);

human.name = "Peter";
human.func = function () {
  console.log("Speak");
};

var doctor = Object.create(human);

doctor.job = "Doctor";
doctor.func = function () {
  console.log("Treat");
};

var pedestrian = Object.create(human);
pedestrian.name = "A guest";

console.log(item.__proto__);
console.log(human.__proto__.__proto__);
console.log(doctor.__proto__.__proto__.__proto__); // prototype chaining
console.log(item.__proto__);
console.log(human.__proto__);
console.log(doctor.__proto__);

human.func();
doctor.func();
pedestrian.func();
pedestrian.weight();

// === class + construnction
function Animal(name) {
  this.name = name;
  this.eat = function () {
    console.log(this.name + " is eating!");
  };
}

var a1 = new Animal("Cow");
a1.eat();

var a2 = new Animal("Dog");
a2.eat();
a2.skill = function () {
  console.log(this.name + " can bark: wof wof");
};
a2.skill();

var a3 = new Animal("Cog");
a3.eat();

// new opeartor
var a4 = Object.create(Animal.prototype);

Animal.prototype.breath = function () {
  console.log(this.name + " Oxygen to C02");
};

var a5 = new Animal("Alive");
a5.breath();

// ===
// this modifier, bind, call, apply
var img = {
  src: "/path/to/image.jpg",
  content: "ocean front",
  imageIdentify: function (color, size = "small") {
    console.log(
      "This image is about " + color + " " + size + " " + this.content,
    );
  },
};

img.imageIdentify("blue");

var customImg = {
  file: "/path/to/another/image.jpg",
  content: "dog",
};

// Bind / copy all behaviors // function curring aka add default argument
var mySuperImageIdentifier = img.imageIdentify.bind(customImg, "yellow", "big");
mySuperImageIdentifier();

// Call / direct call
img.imageIdentify.call(customImg, "white");

// Apply
var args = ["black", "huge"];
img.imageIdentify.apply(customImg, args);

// ===
// Construnction function and inherit
function Material(color, price) {
  // contrunct starts with Capital letter, syntatic sugar
  this.color = color;
  this.price = price;
}

Material.prototype.view = function () {
  console.log("This material is " + this.color);
};
var brick = new Material("brown");
brick.view();

var glass = new Material("transparent");
glass.view();

function Crayon(color, price) {
  Material.call(this, color, price);
}

Crayon.prototype = Object.create(Material.prototype); // prototype chain, hard method
var colors = new Crayon("rainbow");
colors.view();

// ===
Math;
Math.floor;
Math.ceil;

// === function passing argument

var birthYears = [1922, 2003, 2010, 1983, 1998, 2021, 2000];

var ages = processArray(birthYears, findOutAges);
var adults = processArray(ages, isAdult);
var heartrate = processArray(ages, properHeartRate);

function processArray(myArr, fn) {
  var arr = [];
  for (let i = 0; i < myArr.length; i++) {
    arr.push(fn(myArr[i]));
  }
  return arr;
}

function findOutAges(el) {
  return new Date().getFullYear() - el;
}

function isAdult(el) {
  return el > 18;
}
function properHeartRate(age) {
  return Math.round(206.9 - 0.67 * age);
}

console.log(ages);
console.log(adults);
console.log(heartrate);

// === return funciton
function interviewQuestion(job) {
  if (job === "programmer") {
    return function (name) {
      console.log(name + ", do you know prototype?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log(name + ", which class can you teach?");
    };
  } else if (job === "driver") {
    return function (name) {
      console.log(name + ", What kind of vehicles ddi you drive?");
    };
  }
}

var programmerQuestion = interviewQuestion("programmer");
var teacherQuestion = interviewQuestion("teacher");
var driverQuestion = interviewQuestion("driver");

programmerQuestion("Bill Gates");
teacherQuestion("Gandhi");
driverQuestion("Michael Shumaher");

interviewQuestion("driver")("Samual Jackson");

// === IIFE = immediately invoked function expression

// function statement
function hello() {
  console.log("hello");
}
hello();

// function expression
var intro = function helloWorld() {
  console.log("hellow world");
};
intro();

// === expression call immediately

(function () {
  console.log("i am an expression");
})();

(function () {
  var name = "John"; // do not collision
  console.log("Hello " + name);
  (function (name) {
    var name = "Sarah";
    console.log("How you doing " + name + "?");
  })();
})();
