import leia from 'readline-sync';
// Você está desenvolvendo um software para calcular preços do xerox de uma papelaria. Cada cópia custa R$0,33. 
// Crie um algoritmo que mostre os valores de quanto custa 1 cópia até quanto custa 500 cópias.
export function exercicio05() {
    var preco = 0.33;
    var copias = 1;

    do {
        console.log("O preço de " + copias + " é: R$" + preco.toFixed(2));
        copias++;
        preco += 0.33;
    } while (copias <= 500);
}