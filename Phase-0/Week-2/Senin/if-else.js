var nama = 'Bambang Rahmadi';
var peran = 'Ksatria';
  if (nama === '') {
    console.log('Nama tidak boleh kosong');
    if (nama === '') {
      console.log('Pilih peranmu untuk memulai game');
    } else if (peran === 'Ksatria') {
      console.log('Halo Ksatria Bambang Rahmadi, kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Tabib') {
      console.log('Halo Tabib Bambang Rahmadi, kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Penyihir') {
      console.log('Halo Penyihir Bambang Rahmadi, ciptakan keajaiban yang membantu kemenanganmu!');
    }
  } else {
    if (peran === 'Ksatria') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo Ksatria Bambang Rahmadi, kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Tabib') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo Tabib Bambang Rahmadi, kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Penyihir') {
      console.log('Selamat datang di Dunia Proxytia, ' + nama);
      console.log('Halo Penyihir Bambang Rahmadi, ciptakan keajaiban yang membantu kemenanganmu!');
    }
  }
