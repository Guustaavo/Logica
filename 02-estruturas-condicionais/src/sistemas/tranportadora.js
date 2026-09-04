import leia from 'readline-sync';
// ATIVIDADE 6
export function sistema06() {
    var valor = leia.questionFloat("Qual foi o valor da sua compra? ");
    var estados = [
        "SP", "SC", "PR", "RS"
    ]
    var destino = leia.keyInSelect(estados, "Selecione o destino: ");

    if (valor > 500) {
        console.log("Seu frete será gratuito!");
    } else if (destino === 0) {
        var valorFinal = valor + 10;
        console.log("O frete ficou 10 reais.");
        console.log("O valor final da sua compra com frete ficou " + valorFinal);
    } else if (destino === 1) {
        var valorFinal = valor + 20;
        console.log("O frete ficou 20 reais.");
        console.log("O valor final da sua compra com frete ficou " + valorFinal);
    } else if (destino === 2) {
        var valorFinal = valor + 15;
        console.log("O frete ficou 15 reais.");
        console.log("O valor final da sua compra com frete ficou " + valorFinal);
    } else if (destino === 3) {
        var valorFinal = valor + 25;
        console.log("O frete ficou 25 reais.");
        console.log("O valor final da sua compra com frete ficou " + valorFinal);
    }
}