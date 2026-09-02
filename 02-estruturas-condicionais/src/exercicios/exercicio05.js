import leia from 'readline-sync';

export function exercicio05() {
var cliente1 = leia.question("First client name: ");
var valor1 = leia.questionFloat("First client stuffs cost: ");
var cliente2 = leia.question("Second client name: ");
var valor2 = leia.questionFloat("Second client stuffs cost: ");
var total = valor1 + valor2;
var media = total / 2;

if (valor1 > 20 && valor2 > 20) {
    console.log("O cliente " + cliente1 + " e o cliente " + cliente2 + " gastaram mais de 20 reais.");
    console.log("O valor total pago foi de: " + total);
    console.log("A media do valor total gasto foi de " + media);
} else if (valor1 > 20) {
    console.log("Apenas o " + cliente1 + " gastou mais de 20 reais.");
    console.log("O valor total pago foi de: " + total);
    console.log("A media do valor total gasto foi de " + media);
} else if (valor2 > 20) {
    console.log("Apenas o " + cliente2 + " gastou mais de 20 reais.");
    console.log("O valor total pago foi de: " + total);
    console.log("A media do valor total gasto foi de " + media);
} else {
    console.log("Infelizmente, nenhum cliente gastou mais de 20 reais.");
    console.log("O valor total pago foi de: " + total);
    console.log("A media do valor total gasto foi de " + media);
}
}