import leia from 'readline-sync';

var numero = Math.floor(Math.random() * 1000) + 1;

var chute;

var tentativas = 0;

do {
    chute = leia.questionInt("Type a number between 0 and 1000: ");
    tentativas++;

    if (chute > numero) {
        console.log("The number is smaller!");
    } else if (chute < numero) {
        console.log("The number is bigger!");
    }

} while (chute !== numero);

console.log("Parabéns, o numero correto era " + numero + "!");
console.log("Você precisou de apenas " + tentativas + " tentativas!");