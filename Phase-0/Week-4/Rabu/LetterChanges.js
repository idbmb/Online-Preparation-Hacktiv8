/*
Challenge
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
Sample Test Cases
Input:"hello*3"
Output:"Ifmmp*3"

Input:"fun times!"
Output:"gvO Ujnft!"
Hint
Changing a character to the next one that appears in the alphabet can easily be achieved by using the letters character code (ASCII).
http://www.w3schools.com/charsets/ref_html_ascii.asp
*/

function LetterChanges(str) {

  // code goes here
  return str.replace(/[a-z]/ig,function(c){
    var next = String.fromCharCode(c.charCodeAt() + 1);
    if(/[aeiou]/g.test(next)){
      next = next.toUpperCase();
    }
    return c == 'z' ? 'A' : c == 'Z' ? 'A' : next;
  });
}

console.log(LetterChanges("hello*3"));

// keep this function call here
// LetterChanges(readline());
