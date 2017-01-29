/*
Hacktive Final Live Coding 1

Fox Ears

Buat sebuah function recursive bernama foxEars() yang akan mennerima parameter
berupa angka yang mewakili jumlah fox, dan function akan mengembalikan berapa
telinga yg dimiliki fox

*WAJIB menggunakan metode rekursif, DILARANG pake looping dan perkalian
*/

function foxEars (foxs) {
  if(foxs == 0) {
    return 0;
  }
  else {
    return foxs + foxEars(foxs -1); // Stuck here ... punyeng :p
  }
}

console.log(foxEars(3)); // 6
console.log(foxEars(6)); // 12
console.log(foxEars(4)); // 8
console.log(foxEars(0)); // 0
