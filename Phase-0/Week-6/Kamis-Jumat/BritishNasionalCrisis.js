/*
Hacktive Final Live Coding 5

British National Crisis

HINT :
Urutan angka yg keluar lebih dulu tidak penting!
Yang penting adalah kita mendapatkan district berapa yang menjadi target.
*/

function nextTargetArea(code) {
  code = code.split("");
  var kill = [];
  var output = 0
  while (code.length > 2){
    if (code.indexOf("W") > -1) {
      var two = ["T", "W", "O"]
      for (var i = 0; i < two.length; i++) {
        code.splice(code.indexOf(two[i]), 1);
      };
      output += 2
    } else if (code.indexOf("F") > -1) {
      var four = ["F", "O", "U", "R"]
      for (var i = 0; i < four.length; i++) {
        code.splice(code.indexOf(four[i]), 1);
      };
      output += 4
    } else if (code.indexOf("V") > -1) {
      var seven = ["S", "E", "V", "E", "N"];
      for (var i = 0; i < seven.length; i++) {
        code.splice(code.indexOf(seven[i]), 1);
      };
      output += 7
    } else if (code.indexOf("G") > -1) {
      var eight = ["E", "I", "G", "H", "T"];
      for (var i = 0; i < eight.length; i++) {
        code.splice(code.indexOf(eight[i]), 1);
      };
      output += 8
    } else if (code.indexOf("X") > -1) {
      var six = ["S", "I", "X"];
      for (var i = 0; i < six.length; i++) {
        code.splice(code.indexOf(six[i]), 1);
      };
      output += 6
    } else {
      var three = ["T", "H", "R", "E", "E"]
      for (var i = 0; i < three.length; i++) {
        code.splice(code.indexOf(three[i]), 1);
      };
      output += 3
    }
  }
  return `District ${output} is the next target!`
}

console.log(nextTargetArea('WTO'));
console.log(nextTargetArea('WTWTHROETEO'));
console.log(nextTargetArea('HSEVTEEING'));
console.log(nextTargetArea('FNEXSIVUSEOR'));
console.log(nextTargetArea('EFNEXRSIVHUSEORTE'));
