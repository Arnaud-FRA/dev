var a = prompt("Entrez un nombre entier")
var c = prompt("Entrez un opérateur")
var b = prompt("Entrez un nombre entier")
if (c == "+") {
    alert(parseInt(a) + parseInt(b))
}
else if (c == "-") {
    alert(a - b)
}
else if (c == "*") {
    alert(a * b)
}
else if (c == "/") {
    if (b == 0) {
        alert("erreur")
    } else { alert(a / b) }

}
else {
    alert("message d'erreur")
}
