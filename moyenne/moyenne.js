/*let N = prompt("Entrez des entiers")
let i = 0
let m = 0
let s = 0
while (N!=0)
{
     N = prompt("Entrez des entiers")
i+=N
s++
}
m=i/s
alert(m)*/

let n = 1
let s = 0
let d = 0
while (n != 0) {
     n = prompt("Entrez un nombre")
     if (n != 0) {

          s += parseInt(n)
          d++
     }
}
alert(s / d)

