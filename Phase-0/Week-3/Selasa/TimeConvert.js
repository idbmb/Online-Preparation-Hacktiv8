// Challenge
// Using the JavaScript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
// Sample Test Cases
// Input:126
// Output:"2:6"

// Input:45
// Output:"0:45"
// Hint
// Dividing the number by 60 will give you the number of hours, and then to get the minutes the modulo operation will be useful.

function TimeConvert(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  // code goes here
  return hours + ':' + minutes;
}

console.log(TimeConvert(126));

// keep this function call here
// TimeConvert(readline());     
