import leia from 'readline-sync';

var num = leia.questionInt("Digite a quantidade de termos da sequencia Fibonacci: ");

var a = 1;
var b = 1;

if (num >= 1) {
    console.log(a);
}

if (num >= 2) {
    console.log(b);
}

for (var i = 3; i <= num; i++) {
    var c = a + b;
    console.log(c);
    a = b;
    b = c;
}