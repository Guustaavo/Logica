import leia from 'readline-sync';

var options = [
    "Sim", "Nao"
]
var vip = leia.keyInSelect(options, "O cliente e VIP?")
var compra = leia.questionFloat("Digite o valor total da sua compra: ")
var desconto20 = compra * 0.20
var desconto10 = compra * 0.10
var desconto05 = compra * 0.05
var valorFinal20 = compra - desconto20
var valorFinal10 = compra - desconto10
var valorFinal05 = compra - desconto05

if(vip = "Sim" && compra >= 1000){
    console.log("Voce recebeu um desconto de 20 porcento.")
    console.log("O valor final da sua compra ficou R$" + valorFinal20)
}else if(vip = "Sim" && compra >= 500 && compra < 1000){
    console.log("Voce recebeu um desconto de 10 porcento.")
    console.log("O valor final da sua compra ficou R$" + valorFinal10)
}else{
    console.log("Voce recebeu um desconto de 05 porcento.")
    console.log("O valor final da sua compra ficou R$" + valorFinal05)
}