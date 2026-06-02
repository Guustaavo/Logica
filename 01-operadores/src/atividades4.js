import leia from 'readline-sync';

// ATIVIDADE 4

// ENTRADA
var eleitores = leia.questionInt("Numero de Eleitores: ");
var branco = leia.questionInt("Numero de votos em branco: ");
var nulo = leia.questionInt("Numero de votos nulos: ");
var validos = leia.questionInt("Numero de votos validos: ");

// PROCESSAMENTO
var percentualBrancos = (branco / eleitores) * 100;
var percentualNulo = (nulo / eleitores) * 100;
var percentualValidos = (validos / eleitores) * 100;

// SAÍDA
console.log("O percentual de votos brancos foi: " + percentualBrancos.toFixed(2) + "%");
console.log("O percentual de votos nulos foi: " + percentualNulo.toFixed(2) + "%");
console.log("O percentual de votos validos foi: " + percentualValidos.toFixed(2) + "%");