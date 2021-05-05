//Variabel
var tambah = document.getElementById("tambah");
var kurang = document.getElementById("kurang");
var cariHalaman = document.getElementById("cariHalaman");
var pergiHalaman = document.getElementById("pergi");
var badanDiv = document.getElementById("text");

//Variabel Tambahan
var halamanAda = 17;
var url = "#"

//Set cariHalaman
cariHalaman.value = 1;

//Tombol +
tambah.addEventListener("click", function() {
    //Mencari angka halaman sekarang
    var halamanAngka = parseInt(cariHalaman.value);
    //Angka halaman ditambah
    var tambahAngka = halamanAngka + 1;
    //Batas Halaman Ada
    if (tambahAngka <= halamanAda) {
        //Angka halaman ditetapkan
        cariHalaman.value = tambahAngka;
    } else {
        badanDiv.innerHTML = "Melebih batasan"
    }
});

//Tombol -
kurang.addEventListener("click", function() {
    //Mencari angka halaman sekarang
    var halamanAngka = parseInt(cariHalaman.value);
    //Angka halaman ditambah
    var kurangAngka = halamanAngka - 1;
    //Batas Halaman Ada
    if (kurangAngka >= 1) {
        //Angka halaman ditetapkan
        cariHalaman.value = kurangAngka;
    } else {
        badanDiv.innerHTML = "Kurang dari batasan"
    }
});

//Pergi ke
pergiHalaman.addEventListener("click", function() {
    var angka = cariHalaman.value;
    window.location = url + angka;
    badanDiv.innerHTML = "Pergi ke halaman " + angka;
});