/*
Hactiv8 Final Live Coding 4

Joker's Poker

Tersedia sebuah function bernama DealWithTheJoker yang menampung 2 parameter,
1. Merupakan hasil 5 kartu dari penjudi
2. Merupakan hasil 5 kartu dari joker
*masing-masing parameter adalah array

Function akan memproses kedua parameter dan pemain dengan score tertinggi
akan menang.
*/

function DealWithTheJoker(playerResultArr, jokerResultArr) {
  let scores1 = 0;
  playerResultArr.map(function (val, i){
   if(playerResultArr.indexOf(val) != i){
     scores1++;
   };
  })

  let scores2 = 0;
  jokerResultArr.map(function (val, i){
   if(jokerResultArr.indexOf(val) != i){
     scores2++;
   };
  })
  if(scores1 > scores2){
    return 'WIN';
  } else if(scores1 < scores2){
    return 'LOSE';
  } else{
    return 'DRAW';
  }
}

console.log(DealWithTheJoker([2, 2, 3, 3, 5], [5, 5, 5, 5, 2])); // LOSE
console.log(DealWithTheJoker([3, 2, 3, 3, 2], [2, 3, 4, 5, 6])); // WIN
console.log(DealWithTheJoker([5, 2, 5, 5, 5], [2, 2, 2, 3, 7])); // WIN
console.log(DealWithTheJoker([3, 8, 3, 3, 8], [3, 4, 5, 6, 7])); // WIN
console.log(DealWithTheJoker([8, 8, 8, 8, 9], [2, 2, 2, 2, 6])); // DRAW
console.log(DealWithTheJoker([5, 5, 3, 4, 2], [8, 7, 2, 4, 7])); // DRAW
console.log(DealWithTheJoker([9, 3, 2, 2, 9], [5, 5, 5, 5, 2])); // LOSE
