console.log("Hello World!");

// object
var user = {
  name: "Malek",
  lastName: "Boraoui",
  age: null,
};
var x = "name";
console.log(user[x]);
console.log(user.lastName);
console.log(user.age);
// Array
var names = ["haithem", "mustapha", "chams"];

console.log(names[1]);
console.log(names.indexOf("mustapha"));
// function
function add(a, b) {
  return a + b;
}
console.log(add(4, 8));

// falsy value
var x = undefined;
var y = "";
var z = 0;
var w = false;
var t = null;

console.log(Boolean(x));
// Operations
var x = 2;
var y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
x--;
console.log(x);

// equality operators
var x = 5;
var y = "5";
console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

// logical
var x = 5;
var y = 10;
// && AND
console.log(x > 4 && y < 20); // true
console.log(x > 4 && y > 20); // false
console.log(x < 4 && y < 20); // false
console.log(x < 4 && y > 20); // false
// ||  OR
console.log(x > 4 || y < 20); // true
console.log(x > 4 || y > 20); // true
console.log(x < 4 || y > 20); // false
console.log(x < 4 || y < 20); // true

// conditions
var x = 5;

if (x > 20) {
  console.log(x);
} else if (x > 10 && x <= 20) {
  console.log("x between 10 and 20");
} else {
  console.log("x less than 10");
}

// switch
var color = "red";

switch (color) {
  case "red":
    console.log("color red");
    break;
  case "blue":
    console.log("color blue");
    break;
  default:
    console.log("default color");
}
// loops
var names = [
  "mehdi",
  "souhir",
  "chams",
  "mustapha",
  "haithem",
  "ihssen",
  "malek",
  "nadia",
];

for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
var names = [
  "mehdi",
  "souhir",
  "chams",
  "mustapha",
  "haithem",
  "ihssen",
  "malek",
  "nadia",
];

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}
var i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}
do {
  console.log(names[i]);
  i++;
} while (i < names.length);
