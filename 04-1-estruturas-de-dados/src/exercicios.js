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

export function exercicio06(){
    /*Criem um algoritmo que tenha dois vetores de 30 posições,
um para armazenar a mínima de cada dia e outro para a
máxima;
- Usando a função Math.random(), gerem dois valores de
temperatura para o dia. Estes valores devem estar entre 12 e
35 graus.
- De posse destes dois valores gerados, coloquem o menor no
vetor de mínimas e o maior no vetor de máximas.*/
console.log("--- EXERCICIO 06 ---");
var minima = [];
var max = [];

for(var i = 0; i < 30; i++){
    for(var j = 0; j < 1; j++){
        var temperatura1 = Math.floor(Math.random() * 23) + 12
        var temperatura2 = Math.floor(Math.random() * 23) + 12
    }
    var menor = temperatura1
    var maior = temperatura1
    if(menor > temperatura2){
        menor = temperatura2
    }
    else if(maior < temperatura2){
        maior = temperatura2
    }
}
}

export function exercicio07(){
    /*Crie um vetor de 50 posições, um chamado pai e uma vetora
de 50 posições chamada mãe. Estes dois vetores devem ser
preenchidos com valores aleatórios. Depois, crie mais um
vetorzinho de 50 posições chamado filho. Este vetorzinho filho
deve ser preenchido com as características genéticas pares
do pai e com as características genéticas ímpares da mãe*/
    console.log("--- EXERCICIO 07 ---"); 

}

export function exercicio08(){
    /*Crie 3 vetores de 9 posições e crie outro com o 1º terço do
primeiro, o segundo 3º. do segundo e o último terço do 3º.
Escrever o vetor resultante ao final.*/
    console.log("--- EXERCICIO 08 ---"); 
    
    var v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var v2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    var v3 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
    
    var resultado = [];
    
    for(var i = 0; i < v1.length; i++){
        if (i >= 0 && i <= 2){
            resultado[i] = v1[i];
        } else if (i >= 3 && i <= 5){
            resultado[i] = v2[i];
        } else{
            resultado[i] = v3[i];
        }
    }
    console.log(resultado);
}

export function exercicio12(){
    /*Você está construíndo um algoritmo para verificar se um dado de jogo é viciado ou não.
Você deve “jogar” o dado 1000x (gerar números de 1 até 6) e verificar a quantidade e a
porcentagem de vezes que cada valor é gerado. Caso, algum dos valores seja gerado,
mais de 22% das vezes, você deve dizer que o dado é viciado, caso contrário, dizer que
ele não é viciado.*/
    console.log("--- EXERCICIO 12 ---");

    var lados = [0, 0, 0, 0, 0, 0];

    for(var i = 0; i < 1000; i++){
        var resultadoDado = Math.floor(Math.random() * 6) + 1;
        lados

    }
}