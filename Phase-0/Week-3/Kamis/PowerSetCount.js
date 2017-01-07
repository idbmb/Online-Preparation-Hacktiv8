// Challenge
// Using the JavaScript language, have the function PowerSetCount(arr) take the array of integers stored in arr, and return the length of the power set (the number of all possible sets) that can be generated. For example: if arr is [1, 2, 3], then the following sets form the power set:

// []
// [1]
// [2]
// [3]
// [1, 2]
// [1, 3]
// [2, 3]
// [1, 2, 3]

// You can see above all possible sets, along with the empty set, are generated. Therefore, for this input, your program should return 8.
// Sample Test Cases
// Input:1, 2, 3, 4
// Output:16

// Input:5, 6
// Output:4
// Hint
// To determine the number of all sets that can be formed, there is a simple formula to calculate the power set (https://en.wikipedia.org/wiki/Power_set).

function PowerSetCount(arr) {

  // code goes here
  let len = arr.length;
  return Math.pow(2, len);
}

console.log(PowerSetCount([1,2,3,4]));

// keep this function call here
// PowerSetCount(readline());
