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
    var confirmacao = leia.keyInSelect(["Confirmar"], "Confirme para continuar.");
}

do {
    console.clear();
    console.log("=== MENU ===\n");
    var ver = leia.keyInSelect(["Exercícios", "Sistemas", "Parar sistema"], "Escolha o que você deseja ver.");
    if (ver === 0) {
        var opcao = leia.keyInSelect(exercicios, "Selecione um exercício.");
        if (opcao === 0) {
            exercicio01();
        }
        if (opcao === 1) {
            exercicio02();
        }
        if (opcao === 2) {
            exercicio03();
        }
        if (opcao === 3) {
            exercicio04();
        }
        if (opcao === 4) {
            exercicio05();
        }
        if (opcao === 5) {
            exercicio06();
        }
        if (opcao === 6) {
            exercicio07();
        }
        if (opcao === 7) {
            exercicio08();
        }
        if (opcao === 8) {
            exercicio09();
        }
        if (opcao === 9) {
            exercicio10();
        }
        if (opcao === 10) {
            exercicio11();
        }
        if (opcao === 11) {
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
            
        }
        if (opcao === 1) {
            
        }
        if (opcao === 2) {
            
        }
        if (opcao === 3) {
            
        }
        if (opcao === 4) {
            
        }
        if (opcao === 5) {
            
        }
        if (opcao === 6) {
            
        }
        if (opcao === 7) {
            
        }
        if (opcao === 8) {
            
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