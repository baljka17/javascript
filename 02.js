// if and or

let a = true;
if (3 > 1) console.log(true);
if (a && 1) console.log(true);
if (3 || 1) console.log(true);

// Ternary
var name = "John";
var age = 32;

if (age >= 18) console.log("Adult");
else console.log("Child");

age >= 18 ? console.log("Adult") : console.log("Child");

// Switch

let key = "Blue23";
switch (key) {
  case "Red":
    console.log("It is red");
    break;
  case "Green":
    console.log("It is geen");
    break;
  case "Blue":
    console.log("It is blue");
    break;
  case "White":
    console.log("It is red");
    break;
  case "Black":
    console.log("It is red");
    break;
  default:
    console.log("It is gray");
    break;
}

// === function

function printSomething() {
  console.log("Some text");
}
printSomething();

function printString(text) {
  console.log("Text: " + text);
}
printString();
printString(" Hello guys!");
printString(" How you doin today?!");

// === expression && can't call before declaration, it's a variable
var module = function (number) {
  console.log("Expression " + number);
};
// === statement && can call directly + hoisting
function mod(number) {
  console.log("Statement " + number);
}
module(-223);
mod(1234);

// === variables
// primitive only one variable, int, string, boolean,
// object / {key: value}, value or function

let person = {
  name: "John Doe",
  age: "19",
  hobby: "Skiing",
  address: {
    city: "London",
    country: "Briain",
  },
};
console.log(person);
console.log(
  person.name + " is " + person.age + ". He likes to " + person.hobby + ".",
);

console.log(person.name);
console.log(person["name"]);
console.log(person["hobby"]);

var indx = "name";
console.log(person[indx]);
console.log(person[indx].address);
var prop = "address";
var prop1 = "city";
console.log(person[prop][prop1]);

// === Object functions
var car = {
  name: "Mustang",
  engine: "V8",
  fun: "drive",
  information: function () {
    return this.name + " / " + this.engine + " / " + this.fun;
  },
};

console.log("Fnc body: " + car.information);
console.log("Vehicle: " + car.information());

// === array
var languages = ["php", "ruby", "c", "python", "js", "pascal"];
var tags = new Array("h1", "div", null, "aside");

console.log(languages[1]);
console.log(languages.push("typescipt"));
languages[7] = "kotlin";
console.log(languages);
console.log(languages.indexOf("Java"));
console.log(languages.indexOf("js"));

console.log(languages.slice(2, 5));
console.log(languages.splice(2, 2));

var part = languages.slice(4, 6);
console.log(part);
