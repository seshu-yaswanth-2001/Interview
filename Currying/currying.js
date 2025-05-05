/**
 * currying: Currying is a technique where a function does not take all its arguments at once,
 * but instead, returns another function that takes the next argument,
 * and so on, until all arguments are provided
 *
 * we can implement it in two ways: 1) bind 2) closures
 *
 *
 */

// Bind Method
function multiply(x, y) {
  console.log(x * y);
}

const multiplyByTwo = multiply.bind(this, 2);
// this is same as below
// function multiplyByTwo(y) {
//   const x = 2;
//   console.log(x * y);
// }
// multiplyByTwo(3);

// using closures
function sum(a) {
  return function sum(b) {
    console.log(a + b);
  };
}
const sums = sum(2);
sums(3);

// more advance function
const concatinate = (firstName) => (secondName) =>
  console.log(firstName + secondName);
concatinate("seshu")("yaswanth");
