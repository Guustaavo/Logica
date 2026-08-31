import leia from 'readline-sync';
import { ex01 } from './exercicios/exercicio01.js';
import { ex02 } from './exercicios/exercicio02.js';
import { ex03 } from './exercicios/exercicio03.js';
import { ex04 } from './exercicios/exercicio04.js';
import { ex05 } from './exercicios/exercicio05.js';
import { ex06 } from './exercicios/exercicio06.js';
import { ex07 } from './exercicios/exercicio07.js';
import { ex08 } from './exercicios/exercicio08.js';
import { ex09 } from './exercicios/exercicio09.js';
import { ex10 } from './exercicios/exercicio10.js';
import { ex11 } from './exercicios/exercicio11.js';
import { ex12 } from './exercicios/exercicio12.js';
import { ex13 } from './exercicios/exercicio13.js';
import { ex14 } from './exercicios/exercicio14.js';

const opcoes = [
    "Exercício 01",
    "Exercício 02",
    "Exercício 03",
    "Exercício 04",
    "Exercício 05",
    "Exercício 06",
    "Exercício 07",
    "Exercício 08",
    "Exercício 09",
    "Exercício 10",
    "Exercício 11",
    "Exercício 12",
    "Exercício 13",
    "Exercício 14",
    "Sair"
];

function continuar() {
    var continuar = leia.keyInSelect(["Continuar"], "Confirme para continuar. ")
}
do {
    console.clear();
    console.log("\n=== Operadores ===\n");
    var opcao = leia.keyInSelect(opcoes, "Selecione um exercício: ");

    if (opcao === 0) {
        ex01();
        continuar();
    }
    if (opcao === 1) {
        ex02();
        continuar();
    }
    if (opcao === 2) {
        ex03();
        continuar();
    }
    if (opcao === 3) {
        ex04();
        continuar();
    }
    if (opcao === 4) {
        ex05();
        continuar();
    }
    if (opcao === 5) {
        ex06();
        continuar();
    }
    if (opcao === 6) {
        ex07();
        continuar();
    }
    if (opcao === 7) {
        ex08();
        continuar();
    }
    if (opcao === 8) {
        ex09();
        continuar();
    }
    if (opcao === 9) {
        ex10();
        continuar();
    }
    if (opcao === 10) {
        ex11();
        continuar();
    }
    if (opcao === 11) {
        ex12();
        continuar();
    }
    if (opcao === 12) {
        ex13();
        continuar();
    }
    if (opcao === 13) {
        ex14();
        continuar();
    }
} while (opcao !== 14)