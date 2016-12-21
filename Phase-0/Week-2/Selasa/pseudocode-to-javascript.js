// tugas 1
var nama = 'Bambang Rahmadi K.P';
var AngkaPembilang = 15;
var AngkaPenyebut = 3;
var HasilBagi = AngkaPembilang / AngkaPenyebut;
console.log('Hallo ' + nama + ', ' + AngkaPembilang + ' dibagi ' + AngkaPenyebut + ' adalah sama dengan ' + HasilBagi);

// tugas 2
var Alas = 3;
var Tinggi = 6;
var LuasSegitiga = (Alas * Tinggi) / 2;
console.log('Luas Segitiga : ' + LuasSegitiga);

// tugas 3
var tahun = 2016;
      if (tahun % 4 === 0) {
        if (!tahun % 100 === 0) {
          console.log( tahun + ' adalah tahun kabisat');
        } else {
          if (tahun % 400 === 0) {
            console.log( tahun + ' adalah tahun kabisat');
          } else {
            console.log( tahun + ' adalah bukan tahun kabisat');
          }
        }
      } else {
        console.log( tahun + ' adalah bukan tahun kabisat');
      }
