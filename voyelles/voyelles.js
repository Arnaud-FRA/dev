let mot = prompt("Entrez un mot");
let voyelles=["a","e","i","o","u","y"]
let nombre_de_voyelles = 0
for (let lettre of mot) {
        if (voyelles.includes(lettre)) {
            nombre_de_voyelles ++;
        }
    }
alert(nombre_de_voyelles)
