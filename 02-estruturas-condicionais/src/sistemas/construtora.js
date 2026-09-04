import leia from 'readline-sync';
// ATIVIDADE 4
export function sistema04() {
    var lado1 = leia.questionInt("Digite o comprimento do primeiro lado: ");
    var lado2 = leia.questionInt("Digite o comprimento do segundo lado: ");
    var lado3 = leia.questionInt("Digite o comprimento do terceiro lado: ");

    if (lado1 + lado2 > lado3 &&
        lado1 + lado3 > lado2 &&
        lado2 + lado3 > lado1
    ) {
        console.log("É possível formar um triangulo!");
        if (lado1 === lado2 && lado1 === lado3 && lado2 === lado3) {
            console.log("É um triangulo equilatero!");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            console.log("É um triangulo Isosceles!");
        } else {
            console.log("É um triangulo escaleno!");
        }
    } else {
        console.log("Não é possível formar um triângulo.");
    }
}