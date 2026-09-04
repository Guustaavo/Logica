import leia from 'readline-sync';
import { exercicio01 } from './exercicios/ex01.js';
import { exercicio02 } from './exercicios/ex02.js';
import { exercicio03 } from './exercicios/ex03.js';
import { exercicio04 } from './exercicios/ex04.js';
import { exercicio05 } from './exercicios/ex05.js';
import { exercicio06 } from './exercicios/ex06.js';
import { exercicio07 } from './exercicios/ex07.js';
import { exercicio08 } from './exercicios/ex08.js';
import { exercicio09 } from './exercicios/ex09.js';
import { exercicio10 } from './exercicios/ex10.js';
import { exercicio11 } from './exercicios/ex11.js';
import { exercicio12 } from './exercicios/ex12.js';
import { exercicio13 } from './exercicios/ex13.js';
import { exercicio14 } from './exercicios/ex14.js';
import { exercicio15 } from './exercicios/ex15.js';
import { exercicio16 } from './exercicios/ex16.js';

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
    "Exercício 15",
    "Exercício 16",
    "Sair"
];

function continuar() {
    var continuar = leia.keyInSelect(["Continuar"], "Confirme para continuar. ");
}

do {
    console.clear();
    console.log("\n=== Estruturas de Repetição ===\n");
    var opcao = leia.keyInSelect(opcoes, "Selecione um exercício: ");

    if (opcao === 0) {
        exercicio01();
        continuar();
    }
    if (opcao === 1) {
        exercicio02();
        continuar();
    }
    if (opcao === 2) {
        exercicio03();
        continuar();
    }
    if (opcao === 3) {
        exercicio04();
        continuar();
    }
    if (opcao === 4) {
        exercicio05();
        continuar();
    }
    if (opcao === 5) {
        exercicio06();
        continuar();
    }
    if (opcao === 6) {
        exercicio07();
        continuar();
    }
    if (opcao === 7) {
        exercicio08();
        continuar();
    }
    if (opcao === 8) {
        exercicio09();
        continuar();
    }
    if (opcao === 9) {
        exercicio10();
        continuar();
    }
    if (opcao === 10) {
        exercicio11();
        continuar();
    }
    if (opcao === 11) {
        exercicio12();
        continuar();
    }
    if (opcao === 12) {
        exercicio13();
        continuar();
    }
    if (opcao === 13) {
        exercicio14();
        continuar();
    }
    if (opcao === 14) {
        exercicio15();
        continuar();
    }
    if (opcao === 15) {
        exercicio16();
        continuar();
    }
} while (opcao !== 16);

console.log("\nSistema encerrado.\n");