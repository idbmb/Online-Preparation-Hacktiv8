// Part 1 - Seleksi DOM dari HTML

var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element
console.log(pageTitleElement);

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.
console.log(pageBoxElements);

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element
console.log(pageHeadings);

// Part 2 - Mengakses isi HTML dari DOM

var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> : ' + pageTitleElementsContent);
// isi <div id="page-title"> adalah Sample Page Title

var pageBoxElementsContent = pageBoxElements.innerHTML;
console.log('isi <div class="page-box"> : ' + pageBoxElementsContent);
// isi <div class="page-box"> adalah udefined! --> pageBoxElements adalah array, dan saat kita melakukan innerHTML ke array, maka hasilnya adalah undefined!

// Part 3 - Perubahan DOM dengan JavaScript

// Mengambil isi elemen pageBoxElements yang pertama, yaitu index ke 0
var firstPageBoxElement         = pageBoxElements[0];
var firstpageBoxElementContent  = firstPageBoxElement.innerHTML;

// Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 1
var secondPageBoxElement         = pageBoxElements[1];
var secondpageBoxElementContent  = secondPageBoxElement.innerHTML;

// Mengambil isi elemen pageBoxElements yang ketiga, yaitu index ke 2
var thirdPageBoxElement         = pageBoxElements[2];
var thirdpageBoxElementContent  = thirdPageBoxElement.innerHTML;

// Menampilkan isi elemen dengan console.log
console.log('isi <div class="page-box"> yang pertama: ' + firstpageBoxElementContent);
console.log('isi <div class="page-box"> yang kedua: ' + secondpageBoxElementContent);
console.log('isi <div class="page-box"> yang ketiga: ' + thirdpageBoxElementContent);

// Part 4 - Menggunakan Looping

// Meloop array pageBoxElements
for(var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement         = pageBoxElements[i];
  var currentPageBoxElementContent  = currentPageBoxElement.innerHTML;
  console.log('isi <div class="page-box"> index ke ' + i + ' : ' + currentPageBoxElementContent);
}

// Part 5 - Memanipulasi isi HTML dari DOM

// Mengubah isi pageTitleElement
pageTitleElement.innerHTML = 'Updated Content of Page Title Element';
var newPageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent);

// Part 6 - Mengisi innerHTML dengan element HTML 

// Mengubah isi pageTitleElement dengan tag HTML
pageTitleElement.innerHTML = '<h2>Updated Content of Page Title Element</h2>';
var newPageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent);
