// Challenge
// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
// Sample Test Cases
// Input:"xooxxo"
// Output:"true"

// Input:"x"
// Output:"false"
// Hint
// You can write a simple loop that maintains two counts for each of the letters, then at the end check to see if they are equal.

function ExOh(str) {
    var res = str.toLowerCase();

  // code goes here
  var splitString = res.split("");
  var x = 0;
  var o = 0;
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] === 'o') {
      o++;
    } else if (splitString[i] === 'x') {
      x++;
    }
  }

  if(x == o){
    return true;
  } else {
    return false;
  }
}

console.log(ExOh("xooxxo"));

// keep this function call here
// ExOh(readline());
