import { CONFIGURACOES } from "../config/config.js";

function sortear(cobra, inimigos){
    var x;
    var y;

    do{
        x = Math.floor(Math.random() * CONFIGURACOES.largura)
        y = Math.floor(Math.random() * CONFIGURACOES.altura)
    }while(cobra.estaNaPosicao(x, y) || inimigos.estaNaPosicao(x, y));

    comida.x = x;
    comida.y = y;
}

function estaNaPosicao(x, y ){
    return estaNaPosicao = comida.x === x && comida.y === y;
}

export var comida = {
    x: 15,
    y: 7,
    sortear: sortear,
    estaNaPosicao: estaNaPosicao,
}