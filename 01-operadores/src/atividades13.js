import leia from 'readline-sync';

// ATIVIDADE 13

// ENTRADA
var produto = leia.questionFloat("Type the product value: ")

// PROCESSAMENTO
var desconto = (produto * 0.90)
var valorDesconto = (produto - desconto)

// SAÍDA
console.log("The discount value was R$" + valorDesconto + ".");
console.log("The product is costing R$" + desconto + " rn.");