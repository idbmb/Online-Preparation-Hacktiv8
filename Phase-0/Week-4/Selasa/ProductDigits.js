// Challenge
// Using the JavaScript language, have the function ProductDigits(num) take the num parameter being passed which will be a positive integer, and determine the least amount of digits you need to multiply to produce it. For example: if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because there is a total of only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, so in this case your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication.
// Sample Test Cases
// Input:6
// Output:2

// Input:23
// Output:3
// Hint
// Try iterating through all possible combinations of numbers to determine the least amount of digits needed to reach the desired answer. Example: to reach 24, multiply 1 * 24, 2 * 12, 3 * 8, etc.

function ProductDigits(num) {

  // code goes here
  var big;
    for(var i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            var str = "";
            str += (num / i).toString() + (i).toString();
            if(big === undefined){
                big = str.length;
            }
            else if(big > str.length){
                big = str.length;
            }
        }
    }
    return big;
}

console.log(ProductDigits([6]));

// keep this function call here
// ProductDigits(readline());  
