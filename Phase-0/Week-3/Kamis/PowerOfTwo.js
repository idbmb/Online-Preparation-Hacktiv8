// Challenge
// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false.
// Sample Test Cases
// Input:4
// Output:"true"

// Input:124
// Output:"false"
// Hint
// A simple way to solve this challenge is to continuously multiply by 2 (starting from the number 1) and see if you reach the input number or if you overshoot it.

function PowersofTwo(num) {

  // code goes here
  while (num > 1)  {
  if (num%2 !== 0) {
    return false;}
num = Math.floor(num/2);
  }
  return true;
}

console.log(PowersofTwo([124]))

// keep this function call here
// PowersofTwo(readline());  
