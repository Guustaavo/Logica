import leia from 'readline-sync';

// ATIVIDADE 10

// ENTRADA
var nota1 = leia.questionFloat("Type the first one: ");
var nota2 = leia.questionFloat("Type the second one: ");
var nota3 = leia.questionFloat("Type the third one: ");

// PROCESSAMENTO
var media = (nota1 + nota2 + nota3) / 3;
var resultado = media >= 7 ? "APPROVED" : "DISAPPROVED";

// SAÍDA
console.log("This student has a last one like that: " + media.toFixed(2) + ".");
console.log("Then, the student are " + resultado + ".");