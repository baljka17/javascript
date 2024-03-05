// === DOM object

// html = DOM
// html = head + body

// JavaScript manipulates the DOM
console.log(document);
console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("h2")[0].innerHTML);
console.log(document.getElementsByTagName("div"));
console.log(document.getElementById("special"));
const target = document.getElementById("spcecial");

// === Events
// runs at very last of the execution stack

document.querySelector("#clickme").addEventListener("click", function () {
  console.log("You clicked me!");
});

console.log(document.getElementsByTagName("p"));
// callback & anonymous

// 1. function = higher order function
// 2. pass function as an argument = callback
function hello() {
  // back function body
  console.log("Hello fellas!");
}
function greet(callback) {
  // higher order function
  callback();
}
greet(hello); // passing callback

// 3. anonymous
greet(function () {
  console.log("Good morning!");
});
greet(() => console.log("Good morning!")); // arrow
