import leia from "readline-sync";
// ATIVIDADE 7
let idade = leia.questionInt("digite sua idade");
let ingresso = 40;
console.log("qual dia você vai?");
let dia = leia.keyInSelect(["segunda", "terça", "quarta", "quinta", "sexta"]);
console.log("você é estudante?");
let estudanteIngresso = leia.keyInSelect(["sim", "nao"]);

if (idade <= 12) {
    console.log("você ira pagar apenas R$15.00");
}
else if (dia === 0 && estudanteIngresso === 0) {
    ingresso *= 0.50;
    console.log("segunda feira: desconta 50%");
    console.log("você é estudante");
    console.log("valor total com desconto de segunda e cliente estudante: " + ingresso);
}
else if (dia === 0) {
    ingresso *= 0.50;
    console.log("segunda feira: desconta 50%");
    console.log("valor total com desconto de segunda: " + ingresso);
}
else if (estudanteIngresso === 0) {
    ingresso *= 0.70;
    console.log("você é estudante");
    console.log("valor total com desconto estudantil: R$" + ingresso);

}
else {
    console.log("sem desconto");
    console.log("valor sem desconto: " + ingresso);
}