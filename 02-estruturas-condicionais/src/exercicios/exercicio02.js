import leia from 'readline-sync';

export function exercicio02() {
var numero = leia.questionInt("Type the number: ");
if (numero % 2 === 0) {
    console.log("PAR!");
} else {
    console.log("IMPAR!");
}
}