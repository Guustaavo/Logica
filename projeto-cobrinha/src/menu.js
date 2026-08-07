import leia from 'readline-sync';
import { DIFICULDADES } from './config/config.js';
import { jogo } from './objects/jogo.js';

function mostrarMenu() {
    console.log("=====================");
    console.log("  JOGO DA COBRINHA  ")
    console.log("=====================");

    var opcoes = leia.keyInSelect([
        "Facil",
        "Medio",
        "Dificil"
    ], "Escolha uma opção: ")
    var dificuldade = DIFICULDADES[opcoes];

    if (dificuldade === undefined) {
        console.log("Opção Inválida");
        return;
    }

    jogo.iniciar(dificuldade);
}

mostrarMenu();