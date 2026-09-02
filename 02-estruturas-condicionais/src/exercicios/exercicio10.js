import leia from 'readline-sync';

export function exercicio10() {
var value = leia.keyInSelect([
    "R$10", "R$25", "R$50", "Outro valor"
], "QUANTO DESEJA DOAR?");

if (value === "R$10") {
    console.log("Obrigado por doar R$10!");
} else if (value === "R$25") {
    console.log("Obrigado por doar R$25!");
} else if (value === "R$50") {
    console.log("Obrigado por doar R$50!");
} else {
    var outro = leia.questionFloat("Digite o valor que voce deseja doar: ");
    console.log("Obrigado por doar R$" + outro + "!");
}
}