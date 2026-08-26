import leia from 'readline-sync';
import { opcao } from '../index.js';

export function retornar() {
    var retornar = leia.keyInSelect(["Retornar"], "Clique para retornar ao menu principal.");
    console.clear();
    opcao();
}