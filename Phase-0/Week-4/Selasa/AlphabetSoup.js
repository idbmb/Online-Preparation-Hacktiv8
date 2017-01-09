// Challenge
// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.
// Sample Test Cases
// Input:"coderbyte"
// Output:"bcdeeorty"

// Input:"hooplah"
// Output:"ahhloop"
// Hint
// Using a built-in sort function on the string should do the trick for this challenge.

function AlphabetSoup(str) {

  // code goes here
  return str.split("").sort().join("");

}

console.log(AlphabetSoup("coderbyte"));

// keep this function call here
// AlphabetSoup(readline());
