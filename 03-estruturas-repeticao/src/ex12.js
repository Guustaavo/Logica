import leia from 'readline-sync';

console.log("=== JOGO DO NÚMERO MÁGICO ===");
console.log("1 - PvP");
console.log("2 - PvE");

var modo = leia.questionInt("Escolha o modo: ");

var numeroMagico;

if (modo === 1) {
    console.clear();
    numeroMagico = leia.questionInt("Mestre, digite o numero magico: ");
    console.clear();
} else if (modo === 2) {
    console.log("===");
    console.log("Escolha a dificuldade:");
    console.log("1 - Facil (1 a 10)");
    console.log("2 - Medio (1 a 50)");
    console.log("3 - Dificil (1 a 100)");

    var dificuldade = leia.questionInt("Opcao: ");
    var max;

    if (dificuldade === 1) {
        max = 10;
    } else if (dificuldade === 2) {
        max = 50;
    } else {
        max = 100;
    }

    numeroMagico = Math.floor(Math.random() * max) + 1;
} else {
    console.log("Modo invalido!");
    process.exit();
}

var tentativas = 0;
var chute;

do {
    chute = leia.questionInt("Digite seu chute: ");
    tentativas++;

    if (chute > numeroMagico) {
        console.log("O numero magico e menor!");
    } else if (chute < numeroMagico) {
        console.log("O numero magico e maior!");
    }

} while (chute !== numeroMagico);

console.log("")
console.log("Parabens! Voce acertou o numero magico!");
console.log("Numero de tentativas: " + tentativas);