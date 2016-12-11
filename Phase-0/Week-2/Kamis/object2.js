var Teman = function (nama, kabar, pekerjaan) {
      this.nama = nama;
      this.kabar = kabar;
      this.pekerjaan = pekerjaan;
      this.sapa = function () {
console.log('Hallo '+ this.nama + ', apa kabar ?');
      };
      this.balasSapa = function () {
console.log('Hallo ' + this.nama + ', kabarku ' + this.kabar);
      };
      this.tanyaPekerjaan = function () {
console.log('Apa pekerjaanmu saat ini?');
      };
      this.balasPekerjaan = function () {
console.log('Pekerjaanku saat ini adalah ' + this.pekerjaan);
      };
      this.berpisah = function (teman) {
console.log('Senang bertemu denganmu '+ teman.nama +' , semoga kamu sukses sebagai '+ teman.pekerjaan);
      };
    }
var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');
    budi.sapa(tono.nama);
    tono.balasSapa(budi.nama);
    budi.tanyaPekerjaan();
    tono.balasPekerjaan();
    budi.berpisah(tono);
