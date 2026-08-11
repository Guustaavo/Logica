import { CONFIGURACOES } from "../config/config.js";

function criar(quantidade, cobra, comida){
    inimigos.lista = [];
    
    for(var i = 0; i < quantidade; i++){
        var x;
        var y;

        do {
            x = Math.floor(Math.random() * CONFIGURACOES.largura);
            y = Math.floor(Math.random() * CONFIGURACOES.altura);
        } while (cobra.estaNaPosicao(x, y) || comida.estaNaPosicao(x, y) || inimigos.estaNaPosicao(x, y));

        inimigos.lista.push({x: x, y: y})
    }
}

function mover(){
    for(var i = 0; i < inimigos.lista.length; i++){
        var inimigo = inimigos.lista[i];
        var direcao = Math.floor(Math.random() * 4);

        var novoX = inimigo.x;
        var novoY = inimigo.y;

        if (direcao === 0) novoY--;
        if (direcao === 1) novoX++;
        if (direcao === 2) novoY++;
        if (direcao === 3) novoX--;

        if(
            novoX >= 0 &&
            novoX < CONFIGURACOES.largura &&
            novoY >= 0 &&
            novoY < CONFIGURACOES.altura &&
            inimigos.estaNaPosicao(novoX, novoY) === false
        ) {
            inimigo.x = novoX;
            inimigo.y = novoY;
        }
    }
}

function estaNaPosicao(x, y){
    for(var i = 0; i < inimigos.lista.length; i++){
        if(inimigos.lista[i].x === x && inimigos.lista[i].y === y){
            return true;
        }
    }
    return false;
}

export var inimigos = {
    lista: [],
    criar: criar,
    mover: mover,
    estaNaPosicao: estaNaPosicao,
}