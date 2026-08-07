import { SIMBOLOS, CONFIGURACOES } from "../config/config.js";
import { cobra } from "./cobra.js";

function iniciar(dificuldade) {
    console.log(dificuldade);
    desenhar();
}

function teclado() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdout.write("\x1b[?251");
    process.stdin.on("keypress", (str, key) => {
        if (key.name === "q") {
            gameOver = true;
        }
        else if (key.name === "w" && direcao !== "w" && direcao !== "s") {
            direcao = "w"
        }
        else if (key.name === "a" && direcao !== "a" && direcao !== "d") {
            direcao = "a"
        }
        else if (key.name === "s" && direcao !== "s" && direcao !== "w") {
            direcao = "s"
        }
        else if (key.name === "d" && direcao !== "d" && direcao !== "a") {
            direcao = "d"
        }
    })
}

function desenhar() {
    var tela = "";
    tela += "======  JOGO DA COBRINHA  ======\n";
    tela += "Use - W A S D - para mover | - Q - para sair \n\n";

    for (var y = -1; y <= CONFIGURACOES.altura; y++) {
        var linha = "";
        for (var x = -1; x <= CONFIGURACOES.largura; x++) {
            if (x === -1 || x === CONFIGURACOES.largura || y === -1 || y === CONFIGURACOES.altura) {
                linha += SIMBOLOS.parede;
            } else {
                var desenhouCobra = false;
                for (var i = 0; i < cobra.partes.length; i++) {
                    if (cobra.partes[i].x === x && cobra.partes[i].y === y) {
                        linha += (i === 0) ? SIMBOLOS.cabeca : SIMBOLOS.corpo;
                        desenhouCobra = true;
                    }
                }
                if (desenhouCobra === false) {
                    linha += SIMBOLOS.vazio;
                }
            }
        }
        tela += linha + "\n"
    }
    console.clear();
    process.stdout.write("\x1b[H" + tela);
}

export var jogo = {
    pontos: 0,
    fase: 1,
    vidas: 0,
    gameOver: false,
    dificuldade: null,
    velocidadeAtual: 150,
    iniciar: iniciar
}