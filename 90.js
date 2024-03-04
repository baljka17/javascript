// === spread

let boxed = ["firsgt value", "b second", "third"]; //document.querySelectorAll(".selector");

let arr1 = [...boxed];

let [initial, secondary, third] = arr1;

change(...arr1);

function change(f, s, t) {
  console.log(f);
  console.log(s);
  console.log(t);
}

// === rest arguments
function printAge() {
  let arr = Array.prototype.slice.call(arguments);
  console.log(arr);
  arr.forEach((element) => {
    console.log(element);
  });
}
printAge(1992, 2003, 1988);

function printAge6(...years) {
  console.log("rest arguments");
  years.forEach((e) => console.log(e));
}

function printAge6(sex, ...years) {
  console.log("rest arguments");
  console.log(sex);
  years.forEach((e) => console.log(e));
}
printAge6("Female", 1992, 2003, 1988, 2000);

// === argument default value

function translate(question, lang) {
  if (lang === undefined) lang = "mn"; // es5

  switch (lang) {
    case "mn":
      console.log(question);
      break;
    default:
      console.log(question);
      break;
  }
}

function translate(question, lang = "mn") {
  // es6
  switch (lang) {
    case "mn":
      console.log(question);
      break;
    default:
      console.log(question);
      break;
  }
}

translate("What is your name?", "mn");
translate("Таныг хэн гэдэг бэ?", "en");
translate("Таныг хэдэн настай вэ?", "en");
translate("Таны хобби юу вэ?", "en");
translate("Та ямар хэлийг сурч байна вэ?", "en");

// === Map
let dict = new Map();

dict.set("language", "хэл");
dict.set("name", "нэр");
dict.set("car", "машин");
dict.set("software", "програм");
dict.set(1, "нэг");
dict.set(2, "хоёр");

dict.forEach((value, key) => console.log(key + " === " + value));

console.log("Map size: " + dict.size);
dict.delete("car");
console.log("Map size: " + dict.size);

let summerTxt = `Summer is the hottest and brightest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, daylight hours are longest and darkness hours are shortest, with day length decreasing as the season progresses after the solstice. The earliest sunrises and latest sunsets also occur near the date of the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.`;

let myMap = new Map();
let words = summerTxt.split(" ");
console.log(words);
words.forEach((w) => myMap.set(w, 1));
console.log(myMap);
console.log("Unique words in summer text: " + myMap.size);

// === class
// syntax sugar

// es5
function Expense(id, desc, value) {
  this.id = id;
  this.desc = desc;
  this.value = value;
}
Expense.prototype.info = function () {
  console.log("Expense: " + this.id + " " + this.value + " " + this.desc);
};
var e1 = new Expense(1, "Groceries", 24000);
var e2 = new Expense(2, "Fuel", 33000);
e1.info();
e2.info();

// es6
class Income {
  constructor(id, desc, value) {
    this.id = id;
    this.value = value;
    this.desc = desc;
  }
  info() {
    console.log("Income: " + this.id + " " + this.value + " " + this.desc);
  }
  static getCurrencyRate() {
    console.log("USD vs MNT is " + 3400);
  }
}

let i1 = new Income(3, "Wedge", 4500000);
i1.info();
Income.getCurrencyRate();

// === reduce - retunrs one value only

let values = [10, 20, 30, 49, 256, 53, 12, 9];
let sum = 0;

// 1.
for (let i = 0; i < values.length; i++) {
  sum = sum + values[i];
}

// 2
sum = 0;
for (let e of values) {
  sum += e;
}

// 3
sum = 0;
values.forEach((e) => (sum = sum + e));

// 4
sum = values.reduce((a, b) => a + b);
// function add(a, b) {return a + b;}
console.log(sum);

console.log("Max: " + values.reduce((a, b) => (a > b ? a : b)));
console.log("Min: " + values.reduce((a, b) => (a < b ? a : b)));

// === filter
let decs = values.filter((e) => (e % 10 === 0 ? e : false));
console.log(decs);

// === Class and sub class

class Transaction {
  constructor(desc, value) {
    this.desc = desc;
    this.value = value;
  }
  info() {
    let typeTest = this instanceof Inc ? "Орлого" : "Зарлага";
    return `${typeTest}: ${this.value}₮ ${this.desc}`;
  }
}

class Inc extends Transaction {
  constructor(desc, value) {
    super(desc, value);
  }
}

class Exp extends Transaction {
  constructor(desc, value, required = false) {
    super(desc, -value);
    this.required = required;
  }
}

let finance = [];
finance.push(new Inc("Wedge", 7500));
finance.push(new Inc("Divident", 750));
finance.push(new Exp("Rent", 1350, true));
finance.push(new Exp("Enetertainment", 950));
finance.push(new Exp("Bills", 2500, true));
finance.push(new Exp("Disney land", 150));

finance.forEach((t) => console.log(t.info()));
console.log("Balance: " + finance.reduce((balance, t) => balance + t.value, 0));
console.log(
  "Required expenses: " +
    finance.filter((e) => e.required).reduce((sum, t) => sum + t.value, 0),
);
console.log(
  "Unexpected expenses: " +
    finance
      .filter((e) => e.required === false)
      .reduce((sum, t) => sum + t.value, 0),
);

// === async OR sync
const first = () => {
  console.log("Greeting from the first function.");
  second();
  console.log("Goodbye the first fucntion.");
};

const second = () => {
  setTimeout(() => {
    console.log("The second function is running ...");
  }, 3000); // callback function runs after 3 seconds from the event loop
};

first();
