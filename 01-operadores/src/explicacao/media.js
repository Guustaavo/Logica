import leia from 'readline-sync';

var nota1, nota2, nota3;

nota1 = leia.questionFloat("Digite a primeira nota: ");
nota2 = leia.questionFloat("Digite a segunda nota: ");
nota3 = leia.questionFloat("Digite a terceira nota: ");

var soma = nota1 + nota2 + nota3;
var media = soma / 3;

console.log("Sua média terminou em: " + media.toFixed(2));



/*import leia from 'readline-sync';

var nome = leia.question("Type your name: ");

console.log(`Hi ${nome}, how you going?`);

var idade = leia.questionInt(`${nome}, how old are you? `);

if(idade >= 16){

    var temTitulo = leia.keyInSelect(["Yes", "No"], "Do you have vote card? ") + 1;
    if (temTitulo === 1){
        console.log("You can vote!")
    } else {
        console.log("Cannot vote!")
    }

} else {
    console.log("Cannot vote!")
} */


/* var nome = "Gustavo";
nome = 'Gustavo Guimarães';
var idade1 = "15";
var idade2 = 15;

if(idade1 == idade2){ //Operador de igualdade (valor)
    console.log("São iguais (==)")
}

if(idade1 === idade2){
    console.log("São iguais (===)")
} */