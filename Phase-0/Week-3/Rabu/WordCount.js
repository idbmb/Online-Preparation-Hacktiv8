// Challenge
// Using the JavaScript language, have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.
// Sample Test Cases
// Input:"Hello World"
// Output:2

// Input:"one 22 three"
// Output:3
// Hint
// Converting the string into a list of words (the space character can act as a delimiter) and then returning the length of this list should work for this challenge.

function WordCount(str) {
    var arr = str.split(" ");

  // code goes here
  return arr.length;

}

console.log(WordCount("Hello World"));

// keep this function call here
// WordCount(readline());
