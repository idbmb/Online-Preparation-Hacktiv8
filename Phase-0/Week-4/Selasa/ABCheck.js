// Challenge
// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Sample Test Cases
// Input:"after badly"
// Output:"false"

// Input:"Laura sobs"
// Output:"true"
// Hint
// Try writing a simple regular expression that checks if exactly 3 characters are between the letters "a" and "b"

function ABCheck(str) {

  // code goes here
  str=str.toLowerCase();
  var match=str.match(/a...b/ig)
  return (match)?'true':'false';
}

console.log(ABCheck("after badly"));

// keep this function call here
// ABCheck(readline());
