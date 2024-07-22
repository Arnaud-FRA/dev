
let nb1 = prompt("Entrez le nombre 1 :");
let nb2 = prompt("Entrez le nombre 2 :");

/******************************** 
if (nb1 >= 0) {
    if (nb2 >= 0) 
    {
        alert("le résultat est positf");
    }
    else 
    { 
        alert("le résultat est négatif");
    }
}

if (nb1 < 0) {
    if (nb2 < 0) 
    {
        alert("le résultat est positf");
    }
    else 
    { 
        alert("le résultat est négatif");
    }
}


******************************* */


signe_nb1 = "negatif";
signe_nb2 = "negatif";


if (nb1 >= 0) {
    signe_nb1 = "positif";
}

if (nb2 >= 0) {
    signe_nb2 = "positif";
}

if (signe_nb1 === signe_nb2) {
    alert("le résultat est positf");
} else {
    alert("le résultat est négatif");
}
    