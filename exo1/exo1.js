let j=0;
let a=0;
let v=0;
let personnes;
do {
  personnes = window.prompt("Entrez votre age");
  if ( personnes <20) {
    j++;
    console.log(j);
  }
  if (( personnes >=20) && (personnes <=40)){
    a++;
  console.log(a);
  }
  else if ((personnes >=40 ) && (personnes <=100)) {
    v++;
    console.log(v);
  }
}
while (personnes < 100);
 
window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
