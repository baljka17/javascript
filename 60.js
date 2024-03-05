// === closure

var a = [];
a.push(2333);
a.push("text conte");

a.push(function () {
  console.log("Hello outsider?");
  return function () {
    console.log("I am inner inner function.");
  };
});
console.log(a);
console.log(a[1]);
console.log(a[2]());
console.log(a[2]()());

// ===
function prepare() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

var massive = prepare();

massive[0]();
massive[1]();
massive[2]();

// ===
function prepareAgain() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i),
    );
  }
  return arr;
}

var massive = prepareAgain();

massive[0]();
massive[1]();
massive[2]();

// === Modular architecture
