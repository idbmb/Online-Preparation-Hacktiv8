// Challenge
// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
// Sample Test Cases
// Input:"Hello-LOL"
// Output:"hELLO-lol"

// Input:"Sup DUDE!!?"
// Output:"sUP dude!!?"
// Hint
// You can simply loop through the string, checking the case of the character using some built-in function, and then swapping its case.

function SwapCase(str) {
    var idbmb = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase() ) {
            idbmb += str[i].toUpperCase();
        }
        else {
            idbmb += str[i].toLowerCase();
        }
    }

  // code goes here
  return idbmb;
         
}

console.log(SwapCase("Hello-LOL"));

// keep this function call here
// SwapCase(readline());
