/*
Buatlah sebuah script.js yang berada relatif di sebelah index.html.
Dengan memanfaatkan getElementById(), getElementsByClassName(), getElementsByTagName(),
innerHTML(), dan teknik looping, buat perubahan berikut di file script.js
untuk memanipulasi halaman HTML kita:
<h1 id="fill-me"></h1> menjadi <h1 id="fill-me">HALO!</h1>
<p className="change-all-of-me"></p> menjadi <p className="change-all-of-me">HALO JUGA!</p>
<h2>Change the Inside of H2!</h2> menjadi <h2>Apa Kabar!</h2>
*/

// Start Coding :)

// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel.
var pageTitleElement = document.getElementById("fill-me");
pageTitleElement.innerHTML = 'HALO!';
console.log('pageTitleElement');

// Looping pageBoxElements
var pageBoxElements = document.getElementsByClassName("change-all-of-me");
for (var i = 0; i < pageBoxElements.length; i++) {
  pageBoxElements[i].innerHTML = 'HALO JUGA!';
  console.log('pageBoxElements');
}

// Menyeleksi DOM berdasarkan tag <h2> dan menampungnya ke dalam variabel.
var pageHeadings = document.getElementsByTagName("h2");
pageHeadings[0].innerHTML = 'Apa Kabar!';
console.log('pageHeadings');
