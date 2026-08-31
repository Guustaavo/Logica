import leia from 'readline-sync';

//ATIVIDADE 5

export function ex05() {
    // ENTRADA
    var celcius = leia.questionFloat("Type the Graus Celcius: ");
    
    // PROCESSAMENTO
    var farenheit = (celcius * 1.8) + 32;
    var kelvin = celcius + 273.15;
    
    //SAÍDA
    console.log(celcius + " graus Celcius é igual a " + farenheit + " graus Farenheit. E " + celcius + " graus Celcius é igual a " + kelvin + " graus Kelvin.");
}

ex05();