import leia from 'readline-sync';

// ATIVIDADE 6

// ENTRADA
var lucro = leia.questionInt("Insira o valor total arrecadado nas 5 corridas: ")

// PROCESSAMENTO
var percentualAplicativo = (lucro * 0.75)

// SAÍDA
console.log("O dinheiro que o motorista recebeu foi R$" + percentualAplicativo + ".");