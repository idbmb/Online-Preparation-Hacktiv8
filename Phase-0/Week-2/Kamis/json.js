// buat object sebanyak tiga kali
var Object1 = {
      hari: 'Senin',
      kehadiran: 'Masuk',
      alasan: ''
    }
var Object2 = {
      hari: 'Rabu',
      kehadiran: 'Masuk',
      alasan: ''
    }
var Object3 = {
      hari: 'Jumat',
      kehadiran: 'Absen',
      alasan: 'Dinas Luar'
    }
// Rangakai ke-tiga object ke dalama Array
var absensi = [Object1, Object2, Object3];
// Inisialiasai variable perhitungan
var totalHariKerja = 0;
var totalMasuk = 0;
var totalTidakMasuk = 0;
    // Perulangan untuk menampilkan isi dari Array of object
    for (var i = 0; i < absensi.length; i++) {
      console.log('Hari : ' + absensi[i].hari);
      console.log('kehadiran : ' + absensi[i].kehadiran);
      // Jika alasan nya kosong, artinya tidak perlu munculkan absensi dan sebaliknya
      if (absensi[i].alasan !== '') {
        console.log('Alasan : ' + absensi[i].alasan);
      }
      if (absensi[i].kehadiran === 'Masuk') {
        totalMasuk += 1;
      } else {
        totalTidakMasuk += 1;
      }
      totalHariKerja += 1;
    }
console.log('Total hari kerja minggu ini : ' + totalHariKerja + ' Hari');
console.log('Total Masuk : ' + totalMasuk + ' Hari');
console.log('Total Tidak Masuk : ' + totalTidakMasuk + ' Hari');
