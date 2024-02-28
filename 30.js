// === Execution context

// variable & objects
// this reference
// scope chain

// global execution contenx
window;
this;

console.log(window);
console.log(this);
console.log(globalThis);
// Node Global

// Execution stack / stack of contexts

// 1. variable object == undefined
// 2. + scope chain +
// 3. this reference

// === undefined

var unDefinedValue;
console.log(unDefinedValue);
// console.log(nonDeclarativeValue); // ??

unDefinedValue = null; // intentionally

// === hoisting = orgoh
// HDD => RAM => CPU /process

console.log("aa: " + aa); // undefined :: hoisted
var aa = 1234;
console.log("aa: " + aa);

xContext(); // undefined :: hoisted
function xContext() {
  console.log("this is a function");
}
console.log(yContext);
var yContext;
function yContext() {
  console.log("this is a function");
}

// ===

function printInfo(name, age, region, position) {
  console.log(arguments);
  console.log(
    "The " +
      arguments[3] +
      " is " +
      arguments[0] +
      " and he/she is " +
      arguments[1] +
      " years old. He/s is from " +
      arguments[2],
  );
}

printInfo();
printInfo("John Doe", 33, "Pasific", "Software Developer");

// === this key
console.log(this);
function aFunc() {
  console.log(this);
}

var obj = {
  name: "Test",
  printThis: function () {
    console.log(this);
    function cFunc() {
      console.log(this);
    }
    cFunc(); // regular function
  },
};

obj.printThis();

// ===
