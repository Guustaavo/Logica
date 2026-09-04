import leia from 'readline-sync';
// ATIVIDADE 5
export function sistema05() {
    var operadores = [
        "+", "-", "*", "/", "%"
    ]

    var numero1 = leia.questionFloat("Digite o primeiro numero: ");
    var operacao = leia.keyInSelect(operadores, "Selecione a operacao que voce deseja realizar: ");
    var numero2 = leia.questionFloat("Digite o segundo numero: ");

    switch (operacao) {
        case 0:
            var soma = numero1 + numero2;
            console.log("O resultado ficou: " + soma);
            break;
        case 1:
            var subtracao = numero1 - numero2;
            console.log("O resultado ficou: " + subtracao);
            break;
        case 2:
            var mult = numero1 * numero2;
            console.log("O resultado ficou: " + mult);
            break;
        case 3:
            var div = numero1 / numero2;
            console.log("O resultado ficou: " + div);
            break;
        case 4:
            var porcentagem = numero1 * (numero2 / 100);
            console.log("O resultado ficou: " + porcentagem);
            break;
    }
}