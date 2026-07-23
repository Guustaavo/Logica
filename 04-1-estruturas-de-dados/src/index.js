import leia from 'readline-sync';
import { exercicio01, exercicio02, exercicio03, exercicio04, exercicio05 } from './exercicios.js'

console.log("--- MENU DE EXERCÍCIOS ---")
var opcao = leia.keyInSelect([
    "Exercicio 01",
    "Exercicio 02",
    "Exercicio 03",
    "Exercicio 04",
    "Exercicio 05",
    "Exercicio 06",
    "Exercicio 07",
    "Exercicio 08",
    "Exercicio 09",
    "Exercicio 10",
    "Exercicio 11",
    "Exercicio 12",
    "Exercicio 13"
], "Selecione o exercicio que voce queira olhar: ");

switch(opcao){
    case 0:
        // ex01
        exercicio01();
        break;
    case 1:
        // ex02
        exercicio02();
        break;
    case 2:
        // ex03
        exercicio03();
        break;
    case 3:
        // ex04
        exercicio04();
        break;
    case 4:
        // ex05
        exercicio05();
        break;
}