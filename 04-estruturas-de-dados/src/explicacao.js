import leia from 'readline-sync';

// CRIA LISTA
var listaInformacoes = [
    "Gustavo",
    15,
    "Masculino",
    "Estudante",
    true,
]

function info() {

    console.log(listaInformacoes);
    console.log(listaInformacoes[0]);
    console.log(listaInformacoes[1]);
    console.log(listaInformacoes[2]);
    console.log(listaInformacoes[3]);
    console.log(listaInformacoes[4]);

    // ADICIONA EM POSIÇÃO ESPECÍFICA
    var contador = 3;
    listaInformacoes[contador] = "Senai";
    console.log(listaInformacoes[3]);
    
    // ADICIONA NO FINAL DA LISTA
    listaInformacoes.push("De Jesus");
    console.log(listaInformacoes[5]);
    
    // SUBSTITUI ITEM DA POSIÇÃO
    listaInformacoes[1] = 16
    console.log(listaInformacoes[1]);
    
    // TAMANHO DA LISTA
    console.log(listaInformacoes.length);
    
    // PRIMEIRO ITEM DA LISTA
    console.log(listaInformacoes[0]);

    // ULTIMO ITEM DA LISTA
    console.log(listaInformacoes[listaInformacoes.length - 1]);

    // PERCORRER LISTA
    listaInformacoes.forEach((item, index) => {
        listaInformacoes[2] = "Homem";
    });
    /* OU
    for(var i = 0; i < listaInformacoes.length; i++){
        if(listaInformacoes[i] === "Masculino"){
            listaInformacoes[i] = "Homem";
        }
    }*/
    
    console.log(listaInformacoes);
}

info();