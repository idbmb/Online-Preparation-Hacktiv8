// Looping sederhana mengalikan dengan angka sebelumnya, hingga angka terkecil 1
// Sample
// Input totalSum(5)
// Output 5 * 4 * 3 * 2 * 1 = 120

function totalSum (number) {
  var total = 1;
  for (var i = number; i >= 1; i--) {
      total *= i;
  }
  return total;
}

console.log(totalSum(5));

// Looping dengan mengalikan dengan angka sebelumnya dengan selisih paramater kedua
// Sample
// Input : totalLompat(12, 5)
// Output : 12 * 7 * 2 = 168

function totalLompat  (number, dif) {
  var total = 1;
  for (var i = number; i >= 1; i -= dif) {
    total *= i;
  }
  return total;
}

console.log(totalLompat(12, 5));
