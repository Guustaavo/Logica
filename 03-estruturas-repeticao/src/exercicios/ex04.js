import leia from 'readline-sync';
// Escreva um algoritmo que leia 15 valores inteiros e, ao final, mostre qual foi o maior e o menor entre os valores digitados.
export function exercicio04() {
    for (var i = 1; i <= 15; i++) {
        var numeros = leia.questionInt("Digite um número: ");

        if (i === 1) {
            var maior = numeros;
            var menor = numeros;
        } else if (numeros < menor) {
            menor = numeros;
        } else if (numeros > maior) {
            maior = numeros;
        }
    } console.log(menor, maior);
}