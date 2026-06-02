import leia from 'readline-sync';

// ATIVIDADE 7

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