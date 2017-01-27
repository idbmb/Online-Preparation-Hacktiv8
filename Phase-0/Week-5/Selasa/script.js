/*
Buatlah sebuah script.js yang berada relatif di sebelah index.html.
Dengan memanfaatkan children, parentNode, nextElementSibling, previousElementSibling, dan innerHTML(),
buat perubahan berikut di file script.js untuk memanipulasi halaman HTML kita dan
mengubah nilai berikut dengan mengakses <div> yang sesuai:

<div>Saya Adalah Keturunan Pertama</div> menjadi <div>Diakses Melalui Eldest Parent</div>
<div>Saya adalah Generasi Termuda, yang paling Tua</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi Termuda, yang Paling Muda</div> menjadi <div>Diakses Melalui a Child</div>
<div>Saya adalah Generasi yang Cukup Tua</div> menjadi <div>Diakses Melalui a Child</div>
*/

var eldestParent = document.getElementById('eldest-parent');
eldestParent.children[0].innerHTML = 'Diakses Melalui Eldest Parent';

var aChild = document.getElementById('a-child');
aChild.previousElementSibling.innerHTML = 'Diakses Melalui a Child';

aChild.nextElementSibling.innerHTML = 'Diakses Melalui a Child';

aChild.parentNode.parentNode.nextElementSibling.innerHTML = 'Diakses Melalui a Child';
console.log();
