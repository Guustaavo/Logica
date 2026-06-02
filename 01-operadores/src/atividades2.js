import leia from 'readline-sync';

//ATIVIDADE 2

//ENTRADA
var width = leia.questionFloat("Type the form width: ")
var height = leia.questionFloat("Type the form height: ")

// PROCESSAMENTO
var area = width * height;

// SAÍDA
console.log("The form area is: " + area); 