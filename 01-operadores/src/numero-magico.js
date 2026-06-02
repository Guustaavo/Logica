import leia from 'readline-sync';

var numero = Math.floor(Math.random() * 1000) + 1;

var chute;

var tentativas = 0;

do {
    chute = leia.questionInt("Digite um numero entre 0 e 1000: ");
    tentativas++;

    if (chute > numero) {
        console.log("O numero é menor!");
    } else if (chute < numero) {
        console.log("O numero é maior!");
    }

} while (chute !== numero);

console.log("Parabéns, o numero correto era " + numero + "!");
console.log("Você precisou de apenas " + tentativas + " tentativas!");