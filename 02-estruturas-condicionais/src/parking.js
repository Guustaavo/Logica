import leia from 'readline-sync';
// ATIVIDADE 3
var options = [
    "Sim", "Nao"
]
var cartaoFidelidade = leia.keyInSelect(options, "Voce possui o nosso cartao fidelidade?")
var horas = leia.questionInt("Digite a quantidade de horas que o veiculo ficou no estacionamento: ")
if(horas === 1 && cartaoFidelidade === 0){
    var valor = 8
    var desconto = valor * 0.15
    var valorFinal = valor - desconto
    console.log("Voce deve pagar R$" + valorFinal)
}else if(horas > 1 && horas <= 3 && cartaoFidelidade === 0){
    var valor = 15
    var desconto = valor * 0.15
    var valorFinal = valor - desconto
    console.log("Voce deve pagar R$" + valorFinal)
}else if(horas > 3 && horas <= 6 && cartaoFidelidade === 0){
    var valor = 22
    var desconto = valor * 0.15
    var valorFinal = valor - desconto
    console.log("Voce deve pagar R$" + valorFinal)
}else if(horas > 6 && cartaoFidelidade === 0){
    var valor = 30
    var desconto = valor * 0.15
    var valorFinal = valor - desconto
    console.log("Voce deve pagar R$" + valorFinal)
}
if(horas === 1 && cartaoFidelidade === 1){
    var valor = 8
    console.log("Voce deve pagar R$" + valor)
}else if(horas > 1 && horas <= 3 && cartaoFidelidade === 1){
    var valor = 15
    console.log("Voce deve pagar R$" + valor)
}else if(horas > 3 && horas <= 6 && cartaoFidelidade === 1){
    var valor = 22
    console.log("Voce deve pagar R$" + valor)
}else if(horas > 6 && cartaoFidelidade === 1){
    var valor = 30
    console.log("Voce deve pagar R$" + valor)
}