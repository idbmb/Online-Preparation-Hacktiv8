// Challenge
// Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits.
// Sample Test Cases
// Input:453857
// Output:85

// Input:363223311
// Output:63
// Hint
// If you convert the number into a string, you'll then be able to easily loop through it searching for the largest pair of numbers.

function LargestPair(num) {
    var str = num.toString();
    var highest = 0;

  for (var i = 0; i < str.length - 1; i++) {

    var tens = Number(str[i]);
    var unit = Number(str[i+1]);
    var curr = tens*10 + unit;

    if (curr > highest)
      highest = curr;
    }


  // code goes here
  return highest;

}

console.log(LargestPair([453857]));

// keep this function call here
// LargestPair(readline());        
