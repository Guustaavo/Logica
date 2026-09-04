import leia from 'readline-sync';
import { exercicio01 } from './exercicios/exercicio01.js';
import { exercicio02 } from './exercicios/exercicio02.js';
import { exercicio03 } from './exercicios/exercicio03.js';
import { exercicio04 } from './exercicios/exercicio04.js';
import { exercicio05 } from './exercicios/exercicio05.js';
import { exercicio06 } from './exercicios/exercicio06.js';
import { exercicio07 } from './exercicios/exercicio07.js';
import { exercicio08 } from './exercicios/exercicio08.js';
import { exercicio09 } from './exercicios/exercicio09.js';
import { exercicio10 } from './exercicios/exercicio10.js';
import { exercicio11 } from './exercicios/exercicio11.js';
import { exercicio12 } from './exercicios/exercicio12.js';
import { sistema01 } from './sistemas/escola.js';
import { sistema02 } from './sistemas/loja.js';
import { sistema03 } from './sistemas/estacionamento.js';
import { sistema04 } from './sistemas/construtora.js';
import { sistema05 } from './sistemas/calculadora.js';
import { sistema06 } from './sistemas/tranportadora.js';
import { sistema07 } from './sistemas/cinema.js';
import { sistema08 } from './sistemas/energia.js';
import { sistema09 } from './sistemas/futebol.js';

var exercicios = [
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
    "Voltar"
];

var sistemas = [
    "Calculadora",
    "Cinema",
    "Identificador de triângulos",
    "Conversor de energia",
    "Sistema de notas escolar",
    "Estacionamento",
    "Partida de futebol",
    "Valor da compra na loja",
    "Valor transportadora",
    "Voltar"
];

function continuar() {
    var confirmacao = leia.keyInSelect(["Confirmar"], "Confirme para continuar.\n");
}

do {
    console.clear();
    console.log("=== MENU ===\n");
    var ver = leia.keyInSelect(["Exercícios", "Sistemas", "Parar sistema"], "Escolha o que você deseja ver.");
    if (ver === 0) {
        var opcao = leia.keyInSelect(exercicios, "Selecione um exercício.");
        if (opcao === 0) {
            console.log("\n=== Exercício 01 ===\n");
            exercicio01();
        }
        if (opcao === 1) {
            console.log("\n=== Exercício 02 ===\n");
            exercicio02();
        }
        if (opcao === 2) {
            console.log("\n=== Exercício 03 ===\n");
            exercicio03();
        }
        if (opcao === 3) {
            console.log("\n=== Exercício 04 ===\n");
            exercicio04();
        }
        if (opcao === 4) {
            console.log("\n=== Exercício 05 ===\n");
            exercicio05();
        }
        if (opcao === 5) {
            console.log("\n=== Exercício 06 ===\n");
            exercicio06();
        }
        if (opcao === 6) {
            console.log("\n=== Exercício 07 ===\n");
            exercicio07();
        }
        if (opcao === 7) {
            console.log("\n=== Exercício 08 ===\n");
            exercicio08();
        }
        if (opcao === 8) {
            console.log("\n=== Exercício 09 ===\n");
            exercicio09();
        }
        if (opcao === 9) {
            console.log("\n=== Exercício 10 ===\n");
            exercicio10();
        }
        if (opcao === 10) {
            console.log("\n=== Exercício 11 ===\n");
            exercicio11();
        }
        if (opcao === 11) {
            console.log("\n=== Exercício 12 ===\n");
            exercicio12();
        }
        if (opcao === 12) {
            continue;
        }
        else {
            console.log("Opção inválida.");
        }
        continuar();
    }
    if (ver === 1) {
        var opcao = leia.keyInSelect(sistemas, "Selecione um sistema.");
        if (opcao === 0) {
            console.log("\n=== Sistema 01 ===\n");
            sistema01();
        }
        if (opcao === 1) {
            console.log("\n=== Sistema 02 ===\n");
            sistema02();
        }
        if (opcao === 2) {
            console.log("\n=== Sistema 03 ===\n");
            sistema03();
        }
        if (opcao === 3) {
            console.log("\n=== Sistema 04 ===\n");
            sistema04();
        }
        if (opcao === 4) {
            console.log("\n=== Sistema 05 ===\n");
            sistema05();
        }
        if (opcao === 5) {
            console.log("\n=== Sistema 06 ===\n");
            sistema06();
        }
        if (opcao === 6) {
            console.log("\n=== Sistema 07 ===\n");
            sistema07();
        }
        if (opcao === 7) {
            console.log("\n=== Sistema 08 ===\n");
            sistema08();
        }
        if (opcao === 8) {
            console.log("\n=== Sistema 09 ===\n");
            sistema09();
        }
        if (opcao === 9) {
            continue;
        }
        else {
            console.log("Opção inválida.");
        }
        continuar();
    }
    if (ver === 2) {
        console.log("\nSistema encerrado.\n");
    }
} while (ver !== 2)