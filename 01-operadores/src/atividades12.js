import leia from 'readline-sync';

// ATIVIDADE 12

// ENTRADA
var salario = leia.questionFloat("Type your mensal salary: ");

// PROCESSAMENTO 
var withEarning = (salario * 1.15);

// SAÍDA
console.log("If you was earning more, you would earn R$" + withEarning.toFixed(2) + ".");