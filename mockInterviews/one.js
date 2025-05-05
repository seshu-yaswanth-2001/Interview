function abc() {
  //   console.log(abc.xyz);
  //   console.log(abc.name);
  //   console.log(abc.length);
  //   console.log(abc.arguments);
}

abc(); // my thinking: 400, but result is undefined
abc.xyz = 400;
abc.xyz = 100;
abc(); // output: 100

// event Propagation
const numbers = [1, 2, 3, 4];
numbers[100] = 400;
// console.log(numbers); // stores remaining elements as the empty element

// typeof
console.log(typeof typeof 1234); // output: string

// ...args
const str = [..."Seshu"];
console.log(str); // output ["S", "e", "s", "h", "u"]

// parseInt
console.log(parseInt("10+2"));
console.log(parseInt("7FM"));
console.log(parseInt("M7F"));

console.log(
  [1, 2, 3].map((num) => {
    if (num > 0) return;
    return num * 2;
  })
);

function ay() {
  return;
}
console.log(ay());

{
  function sc() {
    console.log("Seshu"); // seshu
  }
}

sc();

// ("use strict");
{
  function sb() {
    console.log("Yaswanth");
  }
}

sb();

function names(a, b) {
  "use strict";
  a = 100;
  b = 200;
  return arguments[0] + arguments[1];
  console.log(a + b);
}
console.log(names(300, 400));

// Mutable array - can change

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1.find((i) => i > 5)); // returns only one value

console.log(arr1.filter((i) => i > 4)); // returns [array with filter values]

console.log(arr1.map((i) => i > 4)); // returns array with condition check

// react js
// use memo and use callback
// use reducer
// contect api and redux
// prop drilling
// app.js file importance
// jsx
// babel
// real dom and virtual dom
// forms validation
// higher order components
// synthetic event in react
// what is action in redux
// jest
// webpack
// react native
// progressive webApps

// HTML
// void elements
// empty tags - examples
// data list tag and select tag
// required
// novalidate
// html and XHTML


// CSS
// Combinators
// pesudo classes
// 3d animations
// image reflections
// flexbox and grid

