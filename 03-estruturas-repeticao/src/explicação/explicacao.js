import leia from 'readline-sync';
/*
var numero = 10;

console.log("WHILE")

while(numero < 10){
    console.log("Teste " + numero)
    numero++;
}

console.log("DO...WHILE")

do{
    console.log("TESTE " + numero)
    numero++
}while(numero < 10)

var senha = ""
var tentativas = 3;

while(senha !== "1234" && tentativas > 0){
    senha = leia.question("DIGITE A SENHA: ")

    if(senha !== "1234"){
        console.log("SENHA INCORRETA!")
        tentativas--;
        console.log("Você tem mais " + tentativas + " tentativas.")
    }
}

if(tentativas > 0){
    console.log("SENHA CORRETA!")
}else{
    console.log("VOCÊ NÃO TEM MAIS TENTATIVAS!")
}
*/

var somaNotas = 0;
var quantidade = 5;
var contador = 1;

while (contador <= quantidade) {
    var nota = leia.questionFloat("DIGITE A NOTA " + contador);
    somaNotas = somaNotas + nota;
    contador++;
}

var media = somaNotas / quantidade;
console.log("MÉDIA " + media.toFixed(1));

for (var i = 0; cont <= quantidade; cont++) {
    var nota = leia.questionFloat("DIGITE A NOTA " + cont + ": ");
    somaNotas = somaNotas + nota;
}

var media = somaNotas / quantidade;
console.log("MÉDIA " + media.toFixed(1));