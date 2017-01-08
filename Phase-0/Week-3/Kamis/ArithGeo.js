// Challenge
// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Sample Test Cases
// Input:5,10,15
// Output:"Arithmetic"

// Input:2,4,16,24
// Output:-1
// Hint
// To determine if a sequence of numbers follows an arithmetic or geometric pattern, it would be useful to divide pairs of numbers in the list to determine their differences.

function ArithGeo(arr) {

// code goes here
var len = arr.length;
var arithK = arr[1] - arr[0];
var geoK = arr[1] / arr[0];

  for (var i = 0; i < len - 1; i++) {
    if (arr[i+1] - arr [i] !== arithK) {
     break;
    }
    else if (i === len - 2) {
      return "Arithmetic";
    }
  }

  for (var i = 0; i < len - 1; i++) {
    if (arr[i+1] / arr [i] !== geoK) {
     break;
    }
    else if (i === len - 2) {
      return "Geometric";
    }
  }

  return -1;
}

console.log(ArithGeo([5,10,15]));

// keep this function call here
// ArithGeo(readline());     
