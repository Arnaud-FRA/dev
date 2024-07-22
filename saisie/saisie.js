var prenom;
var nombre = 0;

prenom = prompt("Entrez un prénom");

if (prenom != "") {
    nombre++;
    console.log(prenom);
    console.log(nombre);
}

while (prenom != "") {
    prenom = prompt("Entrez un prénom");
    if (prenom != "") {
        nombre++;
        console.log(prenom);
        console.log(nombre);
    }
}
console.log("Fin du programme.");


/*

do {
    prenom = prompt("Entrez un prénom");
    if (prenom != "") {
        nombre++;
        console.log(prenom);
        console.log(nombre);
    }
    else{
        console.log("Fin du programme.");
    }
} while (prenom != "");
 */
