// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return function (...nextArgs) {
//         return curried(...args, ...nextArgs);
//       };
//     }
//   };
// }

// const add = (...args) => {
//   const curried = (...nextArgs) => {
//     if (nextArgs.length === 0) {
//       const flattenArray = args.flat();
//       const sum = flattenArray.reduce((prev, next) => prev + next, 0);
//       console.log(sum);
//       return sum;
//     }
//     args.push(...nextArgs);
//     return curried;
//   };
//   return curried;
// };
// const curryAdd = curry(add);

// curryAdd(1, [2, 3])(10);
// curryAdd(1, [2, 3], 10);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const add = (...args) => {
  const curried = (...nextArgs) => {
    if (nextArgs.length === 0) {
      // Flatten the array of arguments to handle arrays passed
      const flattenArray = args.flat();
      const sum = flattenArray.reduce((prev, next) => prev + next, 0);
      console.log(sum);
      return sum;
    }
    // Accumulate arguments
    args.push(...nextArgs);
    return curried;
  };
  return curried;
};

// Wrap the add function with currying
const curryAdd = curry(add);

curryAdd(1, [2, 3])(10)(); // Output: 16 (1 + 2 + 3 + 10)
curryAdd(1, [2, 3], 10)(); // Output: 16 (1 + 2 + 3 + 10)
