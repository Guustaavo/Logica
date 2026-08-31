import leia from 'readline-sync';

// ATIVIDADE 8

export function ex08() {
    // ENTRADA
    var numero = leia.questionInt("Type a number: ");
    
    // PROCESSAMENTO
    var double = (numero * 2);
    var triple = (numero * 3);
    
    // SAÍDA
    console.log("That number two times = " + double + ".");
    console.log("That number three times = " + triple + ".");
}

ex08();