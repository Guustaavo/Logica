import leia from 'readline-sync';

var numero = leia.questionInt("Digite um numero decimal: ");

var binario = "";

if (numero === 0) {
    binario = "0";
} else {
    while (numero > 0) {
        var resto = numero % 2;
        binario = resto + binario;
        numero = Math.floor(numero / 2);
    }
}

console.log("Numero em binario: " + binario);