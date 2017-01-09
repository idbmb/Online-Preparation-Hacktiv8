// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
// Sample Test Cases
// Input:"fun&!! time"
// Output:"time"

// Input:"I love dogs"
// Output:"love"
// Hint
// It might be easier to first convert the string into an array of words, and then loop through the array searching for the word with the most characters.

function LongestWord(sen) {
    var words = sen.split(" ").sort(function(a,b){
    return b.replace(/[^a-z]/gi,"").length - a.replace(/[^a-z]/gi,"").length;
  });

  // code goes here
  return words.shift();
}

console.log(LongestWord("fun&!! time"));

// keep this function call here
// LongestWord(readline());
