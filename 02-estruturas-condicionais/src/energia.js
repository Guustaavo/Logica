import leia from "readline-sync";
// ATIVIDADE 8
let kwh = leia.questionFloat("Digite a quantidade de kWh: ");
let beneficiario = leia.keyInSelect(["sim", "nao"]);
let preco;

if (kwh < 100){
preco = kwh * 0.60;
}
else if (kwh <300){
    preco = kwh * 0.75;
}
else {
    preco = kwh * 0.90;
}
let total = preco * kwh
if (beneficiario === 0){
    preco = total * 0.80
}
console.log("Quantidade de kWh: " + kwh);
console.log("Preço por kWh: R$ " + preco.toFixed(2));
console.log("Total a pagar: R$ " + total.toFixed(2));