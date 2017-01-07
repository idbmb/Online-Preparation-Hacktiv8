// Challenge
// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.
// Sample Test Cases
// Input:"hello"
// Output:2

// Input:"coderbyte"
// Output:3
// Hint
// A simple loop through the string while maintaining a count of vowels should work. You can also try and write a simple regular expression to get a list of all the vowels from the string and then return the length of this list.


function VowelCount(str) {
  var res = str.toLowerCase();
  var splitString = res.split("");
  var vowel = 0;
  for (var i = 0; i < splitString.length; i++) {
    switch (splitString[i]) {
    case 'a':
        vowel++;
        break;
    case 'i':
        vowel++;
        break;
    case 'u':
        vowel++;
        break;
    case 'e':
        vowel++;
        break;
    case 'o':
        vowel++;
        break;
      }
  }

  // code goes here
  return vowel;

}

console.log(VowelCount("abcdefghijklmnopqrstuvwxyz"));

// keep this function call here
// VowelCount(readline());
