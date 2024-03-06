// === multithreated & single threated programming

// JavaScript == Single threat language
// Go == Multithreat programming langauge

// === promise

// JavaScript object
// ES6
// Promise => then => catch => finally

// asynchrononously
// non-blocking // non blocking main threat
// then
// catch

// === promise statuses
// pending
// resolved
// rejected

function get() {
  return fetch("https://custom.com/api")
    .then((res) => res.text())
    .catch((err) => console.log("Error", err));
}

// Mongodb = one of the best nosql examples
// Firebase logout
// database write

let p = new Promise((resolve, reject) => {
  console.log("Promise is running ...");
  resolve("Processing an image");
  reject("Image is large than accepted MB.");
});

p.then((result) => console.log("Successful: " + result));
p.catch((error) => console.log("Error: " + error));

p.then((result) => console.log("Successful: " + result)).catch((error) =>
  console.log("Error: " + error),
);

// Min version
new Promise((resolve, reject) => {
  console.log("Promise is running ...");
  resolve("Processing an image");
  reject("Image is large than accepted MB.");
})
  .then((result) => console.log("Successful: " + result))
  .catch((error) => console.log("Error: " + error));

// === async or await // ES8 - 2017

// getRecipes().then((r) => console.log(r));
// getRecipes(12);

// Example

function getWeather(id) {
  fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id,
  )
    .then((result) => {
      return result.json();
    })
    .then((r) => {
      let data = JSON.parse(r.contents);
      let today = data.consolidated_weather[0];
      console.log(
        "Todays weather is between " +
          today.min_temp +
          " and " +
          today.max_temp,
      );
    })
    .catch((e) => console.log("Error: " + e));
}

// getWeather(2487956);

// === Modular development = MVC

// === webpack
// Optimize js files - asset management
// oPtimeze js usage
// optimize dependency - dependency graph
// compress
// bundle
// dist

// npx webpack
// webpack.config.js

// === export
export function printSomething() {
  console.log("Printing some text");
}

// === .map.js file хаана алдаа гарсныг зааж мэдэж болдог / compress хийсэн юманаас буцаж харахад тусална
