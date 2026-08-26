import leia from 'readline-sync';
import { pedirNumeros } from './utils/pedirNumeros.js';

export function exercicio01() {
    /*Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em
    um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5.
    Por fim exiba os dois vetores.*/
    console.log("--- EXERCICIO 01 ---\n");
    var numeros = pedirNumeros(10);
    var multiplicacao = [];

    for (var i = 0; i < numeros.length; i++) {
        multiplicacao[i] = numeros[i] * 5;
    }

    console.log("A SUA LISTA:");
    console.log(numeros);
    console.log("A MESMA MULTIPLICADA POR 5:");
    console.log(multiplicacao);
}

export function exercicio02() {
    /*Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o
    somatório desses números na tela. Após exibir a soma, o programa deve mostrar
    também os números que o usuário digitou, um por linha.*/
    console.log("--- EXERCICIO 02 ---\n");
    var numeros = pedirNumeros(5);
    var soma = 0;

    for (var i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
        soma += numeros[i];
    }
    console.log("A soma dos numeros foi: " + soma);
}

export function exercicio03() {
    /*Crie um algoritmo para ler 10 números inteiros 
    e mostrar os números pares deste vetor.*/
    console.log("--- EXERCICIO 03 ---\n");
    var numeros = pedirNumeros(10);

    console.log("OS NUMEROS PARES SÃO: ");
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i]);
        }
    }
}

export function exercicio04() {
    /*Crie um algoritmo para ler 15 números inteiros e mostrar 
    no final, os que forem maiores ou igual a 10.*/
    console.log("--- EXERCICIO 04 ---\n");
    var numeros = pedirNumeros(15);

    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 10) {
            console.log(numeros[i])
        }
    }
}

export function exercicio05() {
    /*Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes
    elementos, de tal modo que o primeiro elemento venha a ser o último depois da
    inversão.*/
    console.log("--- EXERCICIO 05 ---\n");
    var numeros = pedirNumeros(5);
    var i2 = 0;
    var inversao = []

    for (var i = 4; i >= 0; i--) {
        inversao[i2] = numeros[i]
        i2++
    }
    console.log(inversao)
}

export function exercicio06() {
    /*Criem um algoritmo que tenha dois vetores de 30 posições,
um para armazenar a mínima de cada dia e outro para a
máxima;
- Usando a função Math.random(), gerem dois valores de
temperatura para o dia. Estes valores devem estar entre 12 e
35 graus.
- De posse destes dois valores gerados, coloquem o menor no
vetor de mínimas e o maior no vetor de máximas.*/
    console.log("--- EXERCICIO 06 ---\n");
    var minima = [];
    var max = [];

    for (var i = 0; i < 30; i++) {
        var temperatura1 = Math.floor(Math.random() * 24) + 12;
        var temperatura2 = Math.floor(Math.random() * 24) + 12;

        var menor = temperatura1;
        var maior = temperatura1;

        if (menor > temperatura2) {
            menor = temperatura2;
        }
        if (maior < temperatura2) {
            maior = temperatura2;
        }
        max[i] = maior;
        minima[i] = menor;
    }
    console.log("\nMinimas, respectivamente: " + "\n" + minima);
    console.log("\nMaximas, respectivamente: " + "\n" + max);
}

export function exercicio07() {
    /*Crie um vetor de 50 posições, um chamado pai e uma vetora
    de 50 posições chamada mãe. Estes dois vetores devem ser
    preenchidos com valores aleatórios. Depois, crie mais um
    vetorzinho de 50 posições chamado filho. Este vetorzinho filho
    deve ser preenchido com as características genéticas pares
    do pai e com as características genéticas ímpares da mãe*/
    console.log("--- EXERCICIO 07 ---\n");

    var pai = [];
    var mae = [];

    var filho = [];

    for (i = 0; i < 50; i++) {
        var randomPai = Math.floor(Math.random() * 51);
        var randomMae = Math.floor(Math.random() * 51);

        pai[i] = randomPai;
        mae[i] = randomMae;


        if (i % 2 === 0) {
            filho[i] = pai[i];
        }
        else {
            filho[i] = mae[i];
        }
    }
    console.log("Pai: \n" + pai);
    console.log("Mae: \n" + mae);
    console.log("Filho: \n" + filho);
}

export function exercicio08() {
    /*Crie 3 vetores de 9 posições e crie outro com o 1º terço do
    primeiro, o segundo 3º. do segundo e o último terço do 3º.
    Escrever o vetor resultante ao final.*/
    console.log("--- EXERCICIO 08 ---\n");

    var v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var v2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    var v3 = [100, 200, 300, 400, 500, 600, 700, 800, 900];

    var resultado = [];

    for (var i = 0; i < v1.length; i++) {
        if (i >= 0 && i <= 2) {
            resultado[i] = v1[i];
        } else if (i >= 3 && i <= 5) {
            resultado[i] = v2[i];
        } else {
            resultado[i] = v3[i];
        }
    }
    console.log(resultado);
}

export function exercicio09() {
    /*Crie um algoritmo que gere um vetor com 10 itens, depois
    disso, você deve percorrer a lista e verificar se existe algum
    valor duplicado.*/
    console.log("--- EXERCICIO 09 ---\n");
    var itens = [];
    var temDuplicada = false;

    for (var i = 0; i < 10; i++) {
        var random = Math.floor(Math.random() * 32) + 1;
        itens[i] = random;
    }

    for (var i2 = 0; i2 < itens.length; i2++) {
        for (var j = i2 + 1; j < itens.length; j++) {
            if (itens[i2] === itens[j]) {
                temDuplicada = true;
                break;
            }
        }
    }

    if (temDuplicada) {
        console.log("Há um ou mais valores duplicados.");
    } else {
        console.log("Não há nenhum valor duplicado, resultado como esperado!");
    }
}

export function exercicio10() {
    /*Criar um vetor de 4 posições e solicitar ao usuário que forneça
    4 números pares para armazenar nele. Caso o usuário digite
    um número ímpar, o algoritmo deve avisar e solicitar um novo
    valor.*/
    console.log("--- EXERCICIO 10 ---\n");
    var vetor = [];
    while (vetor.length < 4) {
        var numerosPares = leia.questionInt("Digite mais " + (4 - vetor.length) + " números pares para colocarmos no vetor: ");

        if (numerosPares % 2 === 0) {
            console.log("Número adicionado com êxito.");
            vetor.push(numerosPares);
        }
        else {
            console.log("Número inválido! Só permitimos números pares. Tente novamente.");
        }
    }
    console.log("\nVetor:");
    console.log(vetor);
}

export function exercicio11() {
    /*Crie uma matriz 8x8 com números aleatórios e posteriormente
    escreva na tela, quais são maiores que 10.*/
    console.log("--- EXERCICIO 11 ---\n");
    var matriz = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var sorteador = Math.floor(Math.random() * 20) + 1;
            matriz[i].push(sorteador);
        }
    }
    matriz.forEach(linha => {
        linha.forEach(numero => {
            if (numero > 10) {
                console.log(numero);
            }
        });
    });
}

export function exercicio12() {
    /*Você está construíndo um algoritmo para verificar se um dado de jogo é viciado ou não.
    Você deve “jogar” o dado 1000x (gerar números de 1 até 6) e verificar a quantidade e a
    porcentagem de vezes que cada valor é gerado. Caso, algum dos valores seja gerado,
    mais de 22% das vezes, você deve dizer que o dado é viciado, caso contrário, dizer que
    ele não é viciado.*/
    console.log("--- EXERCICIO 12 ---\n");

    var lados = [0, 0, 0, 0, 0, 0];
    var viciado = false;

    for (var i = 0; i < 1000; i++) {
        var resultadoDado = Math.floor(Math.random() * 6) + 1;
        lados[resultadoDado - 1]++;
        /* if(resultadoDado === 1) {
            lados[0]++
        } else if (resultadoDado === 2) {
            lados[1]++
        } else if (resultadoDado === 3) {
            lados[2]++
        } else if (resultadoDado === 4) {
            lados[3]++
        } else if (resultadoDado === 5) {
            lados[4]++
        } else if (resultadoDado === 6) {
            lados[5]++
        }*/
    }
    for (j = 0; j < lados.length; j++) {
        var valor = lados[j];
        var porcentagem = (valor / 1000) * 100;
        if (porcentagem > 22) {
            viciado = true;
        }
    }
    console.log("\nRESULTADO:")
    if (viciado) {
        console.log("O dado é viciado! Um ou mais lados caíram mais de 22% das vezes jogadas.");
    }
    else {
        console.log("O dado não é viciado.");
    }
}

export function exercicio13() {
    /*Você é um professor e está criando um algoritmo para fazer a correção das provas de
    maneira automática para você. Primeiro, crie um vetor chamado gabarito com 10
    posições e preencha manualmente com as letras das respostas. Depois, solicite, qual é
    as respostas do aluno. Por fim, verifique quantas estão corretas e gere a nota.*/
    console.log("--- EXERCICIO 13 ---\n");
    var gabarito = ["A", "B", "A", "C", "A", "B", "A", "C", "A", "B"];
    var respostas = [];
    var corretas = 0;

    for (var i = 0; i < gabarito.length; i++) {
        var prova = leia.keyInSelect(["A", "B", "C"], "Marque a alternativa da questão " + (i + 1));
        if (prova === 0) {
            respostas.push("A");
        }
        if (prova === 1) {
            respostas.push("B");
        }
        if (prova === 2) {
            respostas.push("C");
        }
    }
    for (var j = 0; j < gabarito.length; j++) {
        if (respostas[j] === gabarito[j]) {
            corretas++;
        }
    }

    console.log("Gabarito: ");
    console.log(gabarito);
    console.log("Alternativas assinaladas: ");
    console.log(respostas);
    console.log("\nNota final: " + corretas + "/" + "10");
}