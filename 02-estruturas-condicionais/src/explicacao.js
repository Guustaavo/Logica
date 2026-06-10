

var idade = 15;
var temCnh = true;

if (idade < 1){
    console.log("RECÉM NASCIDO")
} else if(idade >= 1 && idade <= 12) {
    console.log("CRIANÇA")
}else if(idade > 12 && idade <= 18) {
    console.log("ADOLESCENTE")
}else if(idade >= 18 && idade < 60) {
    console.log("ADULTO")
}else {
    console.log("IDOSO")
}


var mediaFinal = 10;

if(mediaFinal >= 7){
    console.log("APROVADO!")
}else if(mediaFinal >= 5 && mediaFinal < 7){
    console.log("EM RECUPERAÇÃO!")
}else{
    console.log("REPROVADO!")
}


var diaSemana = "WEDNESDAY"

if(diaSemana === "SATURDAY" || diaSemana === "SUNDAY"){
    console.log("WEEKEND")
}else{
    console.log("WEEKDAY")
}


var formaPagamento = "Pix";
var valorProduto = 15;

if(formaPagamento === "Pix" || formaPagamento === "Dinheiro" || formaPagamento === "Debito"){
    console.log("VALOR DO PRODUTO É: R$" + valorProduto.toFixed(2))
}else{
    var valorFinal = valorProduto + (valorProduto * 0.15)
    console.log("VALOR DO PRODUTO É: R$" + valorFinal.toFixed(2))
}


// DESAFIO DO NÚMERO IMPAR OU PAR;
var numero = 7;
if(numero % 2 === 0){
    console.log("PAR!")
}else{
    console.log("IMPAR!")
}


// SWITCH CASE
var cor = "VERDE";
switch (cor){
    case "VERMELHO":
        console.log("PARE")
        break;
    case "AMARELO":
        console.log("ATENCAO")
        break;
    case "VERDE":
        console.log("SIGA")
        break;
    default:
        console.log("COR INVALIDA")
}


var idioma = "pt";
switch(idioma){
    case "en":
        console.log("HELLO")
        break;
    case "fr":
        console.log("BONJOUR")
        break;
    case "pt":
        console.log("OLA")
        break;
    case "es":
        console.log("HOLA")
        break;
    default:
        console.log("HELLO!")
}


// OPERADOR TERNÁRIO / ESTRUTURA CONDICIONAL  09/06/2026

var idade = 22;
var eMaior = idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE";
console.log(eMaior);

// OU
console.log(idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE")