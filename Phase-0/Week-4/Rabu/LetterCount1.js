/*
Challenge
Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.
Sample Test Cases
Input:"Hello apple pie"
Output:"Hello"

Input:"No words"
Output:-1
Hint
By creating a hash table (or dictionary) of letters encountered with their counts, you can easily determine at the end which character appeared the most times.
*/

function LetterCountI(str) {

  // code goes here
  var words = str.split(' ');
  var maxCount = 0;
  for(var i=0;i<words.length;i++){
    var hi = words[i].match(/([a-z])(?=.*\1)/ig);
    if(hi !== null){
      if(hi.length>maxCount){
        maxCount = hi.length;
        var maxWord = words[i];
      }
    }
  }
  return maxWord || -1;
}

console.log(LetterCountI("Hello apple pie"));

// keep this function call here
// LetterCountI(readline()); 
