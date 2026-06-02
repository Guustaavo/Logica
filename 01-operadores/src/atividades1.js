import leia from 'readline-sync';

//ATIVIDADE 1

var value = leia.questionInt("Type a number: ");

console.log("O número antecessor é: " + --value);