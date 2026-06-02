import leia from 'readline-sync';

var idade, meses, dias

idade = leia.questionInt("Type your age: ")
meses = idade * 12
dias = idade * 365

console.log("Você tem " + idade + " anos de idade, " + meses + " meses de vida e " + dias + " dias de vida.")