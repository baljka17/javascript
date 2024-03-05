// ===

let name = "John";
let position = "software developer";
let job = "MicroSoft";

{
  let name = "Sarah";
  let position = "graphic developer";
  let job = "Dribbble";
  let str = `${name} is a ${position} at ${job}.`;
  console.log(str);
}

(function () {
  let name = "Picasso";
  let position = "painter";
  let job = "royals";
  let str = `${name} is a ${position} at ${job}.`;
  console.log(str);
})();

// ES6 string functions

// Backtick

let str = `${name} is a ${position} at ${job}.`;

console.log(str);

console.log(name.startsWith("J"));
console.log(str.endsWith("t."));
console.log(job.repeat(6));

// === Arrow functions
const years = [1999, 1988, 1933, 2003, 2020];
const today = new Date().getFullYear();

// ES5
var ages5 = years.map(function (el) {
  return today - el;
});

console.log(ages5);

// ES6
var ages6 = years.map((el) => today - el);
console.log(ages6);

// === this object in arrow functions

let human = {
  name: "Angelina",
  greeting: function () {
    console.log("Hello, I am " + this.name);
    setTimeout(function () {
      console.log("Hello, I am " + this.name); // undefined, global this!
    }, 500);
    setTimeout(() => console.log("Hello, I am " + this.name), 1000);
  },
  info: function () {
    let student = {
      name: "Brain",
      greeting: () =>
        console.log("Hello, I am " + this.name + " ... inside arrow"),
      hello: function () {
        console.log("Hello, " + this.name + " ... inside anonymus");
      },
    };
    student.greeting();
    student.hello();
  },
};
human.greeting();
human.info();

// === ES6 object destruct
var arr = ["Steven", 23, "Address, City, Country", "Software developer"];

// var firstName = arr[0];
// var age = arr[1];
// var address = arr[2];
// var jobb = arr[3];

let [firstName, age, address, jobb] = arr;
console.log(`${firstName} ${age} ${address} ${jobb}`);

// === object
let vehicle = {
  name: "Raptor GMT",
  year: 2003,
  price: 57900,
  engine: {
    cylinder: "V8",
    fuel: "Gazoline",
    type: "Hybrid",
  },
};
let {
  name: car,
  engine: { cylinder },
  year,
} = vehicle;
console.log(`${car}: ${year} - ${cylinder}`);

// ===
let ages = [11, 3, 13, 16, 32, 11, 9, 103];

console.log(ages.findIndex((e) => e > 18));
console.log(ages.find((e) => e > 18));
