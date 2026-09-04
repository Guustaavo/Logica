import leia from 'readline-sync';

export function exercicio14() {
    var numero = leia.questionInt("DIGITE UM NUMERO: ");

    var total = 1;

    while (numero > 1) {
        total = total * numero;
        numero--;
    }

    console.log("Fatorial =", total);
}