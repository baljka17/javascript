// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt("Enter an integer: "));
const number = 12; // 132 + "1" = 133, "1"+ 123 = "1123"

//creating a multiplication table
for (let i = 1; i <= 5; i++) {
  // multiply i with number
  const result = i * number;

  // display the result
  console.log(`${number} * ${i} = ${result}`);
}
// ===
let a = 12;

a = a + true + false + true;

console.log(a);
console.log("first name" + " last name " + true);
console.log(4 > 3);
console.log("4" > 3);
console.log("a" > 3);
console.log("a" >= 3);
console.log("a" < 3);
console.log("a" / 3);
console.log("12" / 3);

// ===

var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();
var currentDay = new Date().getDay();
console.log(currentYear);
console.log(currentMonth + 1);
console.log(currentDay);
