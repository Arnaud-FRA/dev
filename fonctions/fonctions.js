
let resultat = 0;
let text = document.getElementById("myP");
let text2 = document.getElementById("myP2");
let photo = document.getElementById("photo");



function blablabla(x, y) {
    x = prompt("Entrez un nombre");
    y = prompt("Entrez un multiplicateur");
    resultat = x * y
    text.innerHTML = x + " x " + y + " = " + resultat
    text2.innerHTML = "le cube de " + x + " est " + Math.pow(x, 3);
}

blablabla();

function afficheImg(image) {
    photo.src = image
}

afficheImg("papillon.jpg");