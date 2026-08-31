// OPERADORES DE COMPARAÇÃO

var nome1 = "Gustavo" == "Roberto";
console.log(nome1);
var numero2 = 1 == 2;
console.log(numero2);
var numero3 = "1" == 2;
console.log(numero3);
var numero4 = true == false;
console.log(numero4);
var numero5 = "true" == false;
console.log(numero5);

var nome2 = "Gustavo" != "Roberto";
console.log(nome2);
var numero22 = 1 != 2;
console.log(numero22);
var numero33 = "1" != 2;
console.log(numero33);
var numero44 = true != false;
console.log(numero44);
var numero55 = "true" != false;
console.log(numero55);

console.log("- - - - - - - -");

var numero10 = 10 == 10;
var numero11 = 10 == "10";

console.log(numero10);
console.log(numero11);

var numero12 = 10 === 10;
var numero13 = 10 === "10";

console.log(numero12);
console.log(numero13);

console.log("- - - - - - - -");

var ehMaior = 18 > 10;
console.log(ehMaior);

// OPERADORES LÓGICOS
var ehVerdade = !true;
var ehMentira = !false;
console.log(ehVerdade);
console.log(ehMentira);

var teste = 18 > 10 && 10 > 5;
var teste2 = 18 > 10 && 10 > 12;

var teste = 18 > 10 || 10 > 5;
var teste2 = 18 > 10 || 10 > 12;