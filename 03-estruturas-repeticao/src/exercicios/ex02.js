import leia from 'readline-sync';
// Faça um programa que leia um número e mostre os números do valor informado até 0.
export function exercicio02() {
    var numero = leia.questionInt("Digite um número: ");
    var zero = 0;

    do {
        console.log(numero);
        numero--;
    } while (numero >= zero);
}