/*
Challenge
Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16.
Sample Test Cases
Input:19
Output:true

Input:110
Output:false
Hint
A prime number is only divisible by 1 and itself, so a simple way to check if a number is prime is to try and divide it by every single number from 1 to itself and see if any numbers go into it without a remainder.
*/

function PrimeTime(num) {

  // code goes here
  if (num < 2) return false;
  for (var i=2; i < num; i++) {
    if ((num / i)%1===0) return false;
  }
  return true;

}

console.log(PrimeTime([19]));

// keep this function call here
// PrimeTime(readline());
