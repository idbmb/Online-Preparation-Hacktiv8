//Game
var soal = {x:0, y:0, jawab:0,opsi:0};
var lv = {max:10,min:0,l:1,skor:0,a:1};


//initialize
buatSoal();
dspLevel.innerHTML ="Level : " +lv.l;
outSkor.innerHTML = "Score : " +lv.skor;

lanjut.addEventListener("click", function(){
    buatSoal();
    pause.style.display = 'none';
    play.style.display = 'block';
});

btnJawab.addEventListener("click", function(){
  if (soal.jawab == inpJawab.value) {
    outHasil.innerHTML = "KAMU HEBAT!<br> JAWABAN BENAR";
    lv.skor += 5;
    if(lv.a >= 3){
      lv.a = 1;
      lv.l+=1;
      if(lv.l > 1){
          lv.max += 10;
          lv.min += 10;
      }
    }
    else lv.a +=1;
  }
  else {
    lv.skor -= 2;
    if (lv.skor <= 0) {
      //gameover
      outHasil.innerHTML = "KAMU KALAH!<br/> <strong>GAME OVER</strong>";
      resetGame();
    } else outHasil.innerHTML = "SALAH";
  }
  pause.style.display = 'block';
  play.style.display = 'none';

  outSkor.innerHTML = "Skor  : " +lv.skor;
});

pilihan.onchange = function(){
  soal.opsi = pilihan.value;
  resetGame();
  buatSoal();
}

//buat soal
function buatSoal(){
  soal.x = acak(lv.max, lv.min);
  soal.y = acak(lv.max, lv.min);

  fopsi(soal.opsi);
  dspLevel.innerHTML ="Level : " +lv.l;
}

function fopsi(a){
  switch (a) {
    case '1':
      cekNilai(0);
      soal.jawab = soal.x - soal.y;
      outSoal.innerHTML = soal.x + " - " + soal.y;
      break;
    case '2':
      soal.jawab = soal.x * soal.y;
      outSoal.innerHTML = soal.x + " x " + soal.y;
      break;
    case '3':
      cekNilai(1);
      soal.jawab = soal.x / soal.y;
      outSoal.innerHTML = soal.x +" : " + soal.y;
      break;
    default:
      soal.jawab = soal.x + soal.y;
      outSoal.innerHTML = soal.x + " + " + soal.y;
  }
}

//buat random angka
function acak(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cekNilai(a){
  if(soal.x < soal.y){
    var swap;
    swap = soal.x;
    soal.x = soal.y;
    soal.y =swap;
  }
}

function resetGame(){
  lv.l = 1;
  lv.skor = 0;
  lv.a = 1;
  lv.max = 10;
  lv.min = 0;
}
