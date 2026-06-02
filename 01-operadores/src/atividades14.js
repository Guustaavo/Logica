import leia from 'readline-sync';

// ATIVIDADE 14

// ENTRADA
var hours = leia.questionInt("Type the hours o'clock right now: ")

// PROCESSAMENTO
var minutes = (hours * 60);
var seconds = (hours * 3600);

// SAÍDA
console.log("Twin but in minutes: " + minutes);
console.log("Twin but in seconds: " + seconds);