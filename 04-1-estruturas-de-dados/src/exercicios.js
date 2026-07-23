import leia from 'readline-sync';
import { pedirNumeros } from './utils/pedirNumeros.js';

export function exercicio01(){
    /*Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em
    um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5.
    Por fim exiba os dois vetores.*/
    console.log("--- EXERCICIO 01 ---");
    var numeros = pedirNumeros(10);
    var multiplicacao = [];
    
    for(var i = 0; i < numeros.length; i++){
        multiplicacao[i] = numeros[i] * 5;
    }
    
    console.log("A SUA LISTA:");
    console.log(numeros);
    console.log("A MESMA MULTIPLICADA POR 5:");
    console.log(multiplicacao);
}

export function exercicio02(){
    /*Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o
    somatório desses números na tela. Após exibir a soma, o programa deve mostrar
    também os números que o usuário digitou, um por linha.*/
    console.log("--- EXERCICIO 02 ---");
    var numeros = pedirNumeros(5);
    var soma = 0;

    for(var i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
        soma += numeros[i];
    }
        console.log("A soma dos numeros foi: " + soma);
}

export function exercicio03(){
    /*Crie um algoritmo para ler 10 números inteiros 
    e mostrar os números pares deste vetor.*/
    console.log("--- EXERCICIO 03 ---");
    var numeros = pedirNumeros(10);
    
    console.log("OS NUMEROS PARES SÃO: ");
    for (var i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){ 
            console.log(numeros[i]);
        }
    }
}

export function exercicio04(){
    /*Crie um algoritmo para ler 15 números inteiros e mostrar 
    no final, os que forem maiores ou igual a 10.*/
    console.log("--- EXERCICIO 04 ---");
    var numeros = pedirNumeros(15);
    
    for(var i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10){
            console.log(numeros[i])
        }
    }
}

export function exercicio05(){
    /*Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes
    elementos, de tal modo que o primeiro elemento venha a ser o último depois da
    inversão.*/
    console.log("--- EXERCICIO 05 ---");
    var numeros = pedirNumeros(5);
    var i2 = 0;
    var inversao = []

    for(var i = 4; i >= 0; i--){
        inversao[i2] = numeros[i]
        i2++
    }
    console.log(inversao)
}