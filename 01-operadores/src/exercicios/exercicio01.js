import leia from 'readline-sync';

//ATIVIDADE 1

export function ex01() {
    // ENTRADA
    var value = leia.questionInt("Type a number: ");

    //SAÍDA
    console.log("O número antecessor é: " + --value);
}

ex01();