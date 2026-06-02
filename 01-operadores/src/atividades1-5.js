import leia from 'readline-sync';

//ATIVIDADE 1

/* 
var value = leia.questionInt("Type a number: ");

console.log("O número antecessor é: " + --value); 
*/



//ATIVIDADE 2

/* 
//ENTRADA
var width = leia.questionFloat("Type the form width: ")
var height = leia.questionFloat("Type the form height: ")

// PROCESSAMENTO
var area = width * height;

// SAÍDA
console.log("The form area is: " + area); 
*/



// ATIVIDADE 3

/*
// ENTRADA
var age = leia.questionInt("Type your years old: ");
var meses = leia.questionInt("Type your months lived: ");
var dias = leia.questionInt("Type your days lived: "); 

// PROCESSAMETO
var year = age * 365;
var month = meses * 30;
var days = year + month + dias;

// SAÍDA
console.log("You lived " + days + " days in the Earth."); 
*/



/*
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
*/



//ATIVIDADE 5


// ENTRADA
var celcius = leia.questionFloat("Type the Graus Celcius: ");

// PROCESSAMENTO
var farenheit = (celcius * 1.8) + 32;
var kelvin = celcius + 273.15;

//SAÍDA
console.log(celcius + " graus Celcius é igual a " + farenheit + " graus Farenheit. E " + celcius + " graus Celcius é igual a " + kelvin + " graus Kelvin."); 
