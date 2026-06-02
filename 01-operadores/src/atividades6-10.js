import leia from 'readline-sync';

// ATIVIDADE 6
/*
// ENTRADA
var lucro = leia.questionInt("Insira o valor total arrecadado nas 5 corridas: ")

// PROCESSAMENTO
var percentualAplicativo = (lucro * 0.75)

// SAÍDA
console.log("O dinheiro que o motorista recebeu foi R$" + percentualAplicativo + ".");
*/



// ATIVIDADE 7
/*
// ENTRADA
var valor = leia.questionInt("Informe o valor do produto: ")

// PROCESSAMENTO
if (valor >= 20){
    var produtoCaro = (valor * 1.30)
    console.log("Voce deve vender esse produto por R$" + produtoCaro)
}   else {
    var produtoBarato = (valor * 1.45)
    console.log("Voce deve vender esse produto por R$" + produtoBarato)

}
*/



// ATIVIDADE 8
/*
// ENTRADA
var numero = leia.questionInt("Type a number: ");

// PROCESSAMENTO
var double = (numero * 2);
var triple = (numero * 3);

// SAÍDA
console.log("That number two times = " + double + ".");
console.log("That number three times = " + triple + ".");
*/



// ATIVIDADE 9
/*
// ENTRADA
var meters = leia.questionInt("Type the meters: ");

// PROCESSAMENTO
var centimeters = (meters * 100);
var milimeters = (meters * 1000);

// SAÍDA
console.log("The same value but in centimeters: " + centimeters + ".");
console.log("The same value but in milimeters: " + milimeters + ".");
*/



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