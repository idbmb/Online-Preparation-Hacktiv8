// Challenge
// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
// Sample Test Cases
// Input:"never odd or even"
// Output:"true"

// Input:"eye"
// Output:"true"
// Hint
// A palindrome is a string that is read the same forwards as it is backwards, so simply reversing the string and then checking if it is equal to the original string should do the trick.

function Palindrome(str) {
    var idbmb = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {idbmb += str[i]};
    }

    for (var j = 1; j < idbmb.length; j++) {
        if (idbmb[idbmb.length - j] !== idbmb[j - 1]) {

  // code goes here
  return "false";
  }
    }
  return "true";
  }

console.log(Palindrome("never odd or even"));

// keep this function call here
// Palindrome(readline()); 
