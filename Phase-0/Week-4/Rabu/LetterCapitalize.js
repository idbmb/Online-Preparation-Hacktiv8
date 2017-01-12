/*
Challenge
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
Sample Test Cases
Input:"hello world"
Output:"Hello World"

Input:"i ran there"
Output:"I Ran There"
Hint
There might be a built-in function in your programming language that capitalizes the first letter of each word.
*/

function LetterCapitalize(str) {
    wordarr = str.split(' ');
    for (var i = 0, n = wordarr.length; i < n; i++) {
        wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1);

    }

  // code goes here
  return wordarr.join(' ');

}

console.log(LetterCapitalize("hello world"));

// keep this function call here
// LetterCapitalize(readline());      
