function baza() {
    document.getElementById("sekcja1").style.display = "block";
    document.getElementById("sekcja2").style.display = "none";
    document.getElementById("sekcja3").style.display = "none";

    document.getElementById("blok1").style.backgroundColor = "mistyrose";
    document.getElementById("blok2").style.backgroundColor = " #FFAEA5 ";
    document.getElementById("blok3").style.backgroundColor = " #FFAEA5 ";
}
function opis(){
    document.getElementById("sekcja1").style.display = "none";
    document.getElementById("sekcja2").style.display = "block";
    document.getElementById("sekcja3").style.display = "none";

    document.getElementById("blok1").style.backgroundColor = " #FFAEA5 ";
    document.getElementById("blok2").style.backgroundColor = "mistyrose";
    document.getElementById("blok3").style.backgroundColor = " #FFAEA5 ";
}
function galeria() {
    document.getElementById("sekcja1").style.display = "none";
    document.getElementById("sekcja2").style.display = "none";
    document.getElementById("sekcja3").style.display = "block";

    document.getElementById("blok1").style.backgroundColor = " #FFAEA5 ";
    document.getElementById("blok2").style.backgroundColor = " #FFAEA5 ";
    document.getElementById("blok3").style.backgroundColor = "mistyrose";
}