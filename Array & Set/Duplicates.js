/**
 * Find the duplicates in given array and return the duplicate values in array
 */

const arr = [10, 100, 20, 30, 10, 40, 100, 10];

function findDuplicate(arr) {
  let seen = new Set();
  let duplicateValues = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      duplicateValues.add(arr[i]);
    } else {
      seen.add(arr[i]);
    }
  }
  return Array.from(duplicateValues);
}

console.log(findDuplicate(arr));
