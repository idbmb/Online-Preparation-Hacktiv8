/*
Challenge
Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
Sample Test Cases
Input:99946
Output:9-9-946

Input:56730
Output:567-30
Hint
You can simply loop through the string, inserting a dash whenever you encounter an odd number that also has an odd number directly preceding it.
*/

function DashInsert(str) {
    var arr = str.split('');
    for (var i = 0; i < str.length-1; i++) {
        if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
            arr[i] = arr[i] + '-';
        }
    }

  // code goes here
  return arr.join('');

}

console.log(DashInsert("99946"));

// keep this function call here
// DashInsert(readline());
