/*
NAMA: BAMBANG RAHMADI KP
HACKTIV8 Online Live Coding 1

============
The Gamblers
============

Seorang pejudi melakukan mengocokan dadu sebanyak tiga kali.
Ia akan mendapat cash sebesar 100 dikalikan dengan jumlah angka
yang keluar dari dadu, apabila bukan 1.

Apabila keluar angka 1, ia akan mendapatkan denda cash senilai 1000.
Hasil tiga kali pengocokan dadu akan dimasukkan ke dalam array, yang
menjadi parameter ke fungsi rollDice.

Contoh 1:
hasil dadu = [2, 3, 4]
cash = (2 * 100) + (3 * 100) + (4 * 100) = 900

Contoh 2:
hasil dadu = [3, 3, 1]
cash = (3 * 100) + (3 * 100) + (1 * -1000) = -400

Contoh 3:
hasil dadu = [1, 2, 9]
cash = (1 * -1000) + (2 * 100) + (9 * 100) = 100
*/

// function rollDice(inputArray) {
//   var output = 0;
//   for (var i = 0; i < inputArray.length; i++ ) {
//     if (inputArray[i] == 1 ) {
//       output = output - 1000;
//     } else {
//        output += inputArray[i] * 100;
//     }
//   }
// }

// return output;
// }


 function rollDice(diceResultsParam) {
   var output = 0;
   if(diceResultsParam[0] == 1){
     output = output - 1000;
   } else {
     output = output + diceResultsParam[0] * 100
   }
  if(diceResultsParam[1] == 1){
     output = output - 1000;
   } else {
     output = output + diceResultsParam[1] * 100
   }
   if(diceResultsParam[2] == 1){
     output = output - 1000;
   } else {
     output = output + diceResultsParam[2] * 100
   }

  return output;
 }

var diceResults1 = [2, 3, 4];
console.log(rollDice(diceResults1));

var diceResults2 = [3, 3, 1];
console.log(rollDice(diceResults2));

var diceResults3 = [1, 2, 9];
console.log(rollDice(diceResults3));
