import leia from 'readline-sync';
// Faça um algoritmo que leia um número e mostre os números de 0 até o valor informado pelo usuário.

var zero = 0
var numero = leia.questionInt("DIGITE UM NÚMERO: ")

do{
    console.log(zero)
    zero++
}while(zero <= numero)