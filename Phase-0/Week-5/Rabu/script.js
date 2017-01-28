var mainForm = document.getElementById("main-form");
mainForm.addEventListener("submit", function (event) {
event.preventDefault();
if (document.getElementById("username").value === "") {
alert("Username Harus di Isi!");
return false;
}
else if (document.getElementById("password").value === "") {
alert("Password Tidak Boleh Kosong!");
return false;
}
else if (document.getElementById("confirmpassword").value == "") {
alert("Konfirmasi Password Tidak Boleh Kosong!");
return false;
}
else if (document.getElementById("email").value === "") {
alert("Email Harus di Isi!");
return false;
}
else if (document.getElementById("confirmemail").value === "") {
alert("Konfirmasi Email Tidak Boleh Kosong!");
return false;
}
else if (document.getElementById("password").value != document.getElementById("confirmpassword").value) {
alert("Password dan Konfirmasi Password Harus di Isi Sama.");
return false;
}
else if (document.getElementById("email").value != document.getElementById("confirmemail").value) {
alert("Email dan Konfirmasi Email Harus di Isi Sama.");
return false;
}
else if (document.getElementById("username").value.length < 5) {
alert("Jumlah Karakter Username Minimal 5!");
return false;
}
else if (document.getElementById("password").value.length < 6) {
alert("Jumlah Karakter Password Minimal 6!");
return false;
}else{
document.getElementById("main-form").innerHTML = "Selamat, registrasi anda telah berhasil!";
document.getElementById("main-form").innerHTML += "<br/>" + "<br/>" + "Kembali ke halaman " + "<a href='index.html'>sebelumnya</a>";
return true;
}
});
