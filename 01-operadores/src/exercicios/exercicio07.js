import leia from 'readline-sync';

// ATIVIDADE 7

export function ex07() {
    // ENTRADA
    var valor = leia.questionInt("Informe o valor do produto: ");
    
    // PROCESSAMENTO
    if (valor >= 20) {
        var produtoCaro = (valor * 1.30);
        // SAÍDA
        console.log("Voce deve vender esse produto por R$" + produtoCaro);
    } else {
        var produtoBarato = (valor * 1.45);
        //SAÍDA
        console.log("Voce deve vender esse produto por R$" + produtoBarato);
    
    }
}

ex07();