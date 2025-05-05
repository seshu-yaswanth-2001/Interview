/**
 * Write a function that splits an array into chunks (subarrays) of a given size m.
 * if the array can't be split evenly, the final chunk should containt the remaining elements
 *
 * Input:
 * An array of elements arr
 * An array integer "n" representing the size of each chunk
 *
 * Output:
 * An array of subarrays, each with a length of n (except the possibly the last one)
 */

const Chunking = (arr, size) => {
  const arraySize = arr.length;
  const numberOfArrays = Math.ceil(arraySize / size);
  const result = Array.from({ length: numberOfArrays }, () => []);

  for (let i = 0; i < arr.length; i++) {
    const chunkIndex = Math.floor(i / size);
    result[chunkIndex].push(arr[i]);
  }
  console.log(result);
};

Chunking([], 3);
