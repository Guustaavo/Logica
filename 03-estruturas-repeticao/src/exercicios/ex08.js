import leia from 'readline-sync';
// Crie um algoritmo para que o usuário entre com 6 números inteiros e positivos 
// e mostre a soma dos números ímpares e o produto (multiplicação) dos números pares.
export function exercicio08() {
    var mult = 1;
    var soma = 0;

    for (var i = 1; i <= 6; i++) {
        var numeros = leia.questionInt("Digite um número: ");
        if (numeros % 2 === 0) {
            mult = mult * numeros;
        } else {
            soma = soma + numeros;
        }
    } console.log(soma, mult);
}