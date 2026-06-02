import leia from 'readline-sync';

// ATIVIDADE 9

// ENTRADA
var meters = leia.questionInt("Type the meters: ");

// PROCESSAMENTO
var centimeters = (meters * 100);
var milimeters = (meters * 1000);

// SAÍDA
console.log("The same value but in centimeters: " + centimeters + ".");
console.log("The same value but in milimeters: " + milimeters + ".");