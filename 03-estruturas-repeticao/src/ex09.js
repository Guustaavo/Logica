import leia from 'readline-sync';
// Faça um algoritmo que leia vários números e informe quantos números entre 100 e 200 foram digitados  
// (o 100 e o 200 não contam), para as leituras quando o valor 0 (zero) for lido.

var contador = 0
var cd = 0

do{
    var numero = leia.questionInt("Digite o número " + contador + ": ");
    if(numero > 100 && numero < 200){
        cd++
    }
    contador++
}while(numero !== 0)
    console.log("Você teve " + contador + " tentativas.")
    console.log("Você digitou " + cd + " números entre 100 e 200.")