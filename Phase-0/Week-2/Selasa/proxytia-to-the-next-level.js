var nama = 'Bambang Rahmadi';
var peran = 'Ksatria';
var tahunLahir = 1993;
var umur = 2016 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));
     if (nama === '') {
       console.log('Nama tidak boleh kosong');
       peran = 'kacung';
       if (peran === '') {
         console.log('Pilih peranmu untuk memulai game');
       }
     } else {
       if (peran === 'Ksatria') {
         console.log('Selamat datang di Dunia Proxytia, ' + nama);
         console.log('Halo Ksatria '+nama+', kamu dapat menyerang dengan senjatamu!');
       } else if (peran === 'Tabib') {
         console.log('Selamat datang di Dunia Proxytia, ' + nama);
         console.log('Halo Tabib '+nama+', kamu akan membantu temanmu yang terluka.');
       } else if (peran === 'Penyihir') {
         console.log('Selamat datang di Dunia Proxytia, ' + nama);
         console.log('Halo Penyihir '+nama+', ciptakan keajaiban yang membantu kemenanganmu!');
       }
     }
     console.log('kodeMonster : ', kodeMonster);
     for (var i = 1; i <= tahunLahir; i++) {
       if (i % umur === 0) {
         console.log(peran + ' ' + nama + ' menyerang monster!');
         monsterHealth -= umur;
       } else if (i % kodeMonster === 0) {
         console.log('monster menyerang ' + peran + ' ' + nama + '!');
         playerHealth -= kodeMonster;
       } else if (i % umur === 0 && i % kodeMonster === 0){
         console.log('Health keduanya bertambah');
         playerHealth += kodeMonster;
         monsterHealth += umur;
       }
     }
     if(playerHealth > monsterHealth) {
       console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
     } else {
       console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
     }
