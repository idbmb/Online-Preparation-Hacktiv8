// Rekursif sederhana mengalikan dengan angka sebelumnya, hingga angka terkecil 1
// Sample
// Input totalSum(5)
// Output 5 * 4 * 3 * 2 * 1 = 120
function totalSum (number) {
  if (number == 1) {
    return 1;
  } else {
    return number * totalSum(number - 1);
  }
}

console.log(totalSum(5));

// Rekrusif dengan mengalikan dengan angka sebelumnya dengan selisih paramater kedua
// Sample
// Input : totalLompat(12, 5)
// Output : 12 * 7 * 2 = 168
function totalLompat (number, dif) {
  if (number == 1) {
    return 1;
  } else if (number > dif) {
    return number * totalLompat(number - dif, dif);
  } else {
    return number;
  }
}

console.log(totalLompat(12, 5));
