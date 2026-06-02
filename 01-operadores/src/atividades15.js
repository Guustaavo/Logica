import leia from 'readline-sync';

// ATIVIDADE 15

// ENTRADA
var kilometers = leia.questionFloat("Type the kilometers runned: ");
var liters = leia.questionFloat("Type the liters consumed: ");

// PROCESSAMENTO
var calculo = (kilometers / liters);

// SAÍDA
console.log("The km/l is: " + calculo + ".");