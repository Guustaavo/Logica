import leia from 'readline-sync';

// ATIVIDADE 3

export function ex03() {
    // ENTRADA
    var age = leia.questionInt("Type your years old: ");
    var meses = leia.questionInt("Type your months lived: ");
    var dias = leia.questionInt("Type your days lived: ");

    // PROCESSAMETO
    var year = age * 365;
    var month = meses * 30;
    var days = year + month + dias;

    // SAÍDA
    console.log("You lived " + days + " days in the Earth.");
}

ex03;