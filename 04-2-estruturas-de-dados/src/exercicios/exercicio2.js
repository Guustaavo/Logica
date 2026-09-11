import leia, { questionInt } from 'readline-sync';
/*
Crie um vetor contendo objetos representando passageiros de um ônibus. Cada
passageiro deverá possuir: nome, idade, destino, pagouPassagem.
Percorra o vetor e apresente:
Quantidade de passageiros.
Quantidade de passageiros menores de idade.
Quantidade de passageiros com 60 anos ou mais.
Quantidade de passageiros que ainda não pagaram a passagem.
Média de idade dos passageiros.
Depois, peça ao usuário um destino e mostre todos os passageiros que irão para esse
destino.
*/

var passageiros = [
    {
        nome: "Alexandra",
        idade: 18,
        destino: "Cidade da Cordilheira",
        pagouPassagem: false,
    },
    {
        nome: "Alex",
        idade: 15,
        destino: "Parque Agradável",
        pagouPassagem: false,
    },
    {
        nome: "Gabriel",
        idade: 30,
        destino: "Fontes Salgadas",
        pagouPassagem: false,
    },
    {
        nome: "Lucas",
        idade: 25,
        destino: "Via do  Varejo",
        pagouPassagem: false,
    },
    {
        nome: "Igor",
        idade: 20,
        destino: "Torres Tortas",
        pagouPassagem: false,
    }
]

var destinos = [,];
for (var j = 0; j < passageiros.length; j++) {
    if (!destinos.includes(passageiros[j].destino)) {
        destinos.push(passageiros[j].destino);
    }
}

function mostrarPassageiros() {
    console.log("\n=== PASSAGEIROS ===\n");
    var i = 1;
    passageiros.forEach((passageiro) => {
        console.log(i);
        console.log("Nome: - " + passageiro.nome + " | " + passageiro.idade + " anos.");
        console.log("Destino: - " + passageiro.destino);
        console.log("Passagem: - " + passageiro.pagouPassagem);
        i++
        console.log("\n")
    })
}

function mostrarMenoresDeIdade() {
    console.log("\n=== MENORES DE IDADE ===");
    console.log("Esses são os passageiros menores de idade: \n");
    var quantidade = 0;
    for (var i = 0; i < passageiros.length; i++) {
        if (passageiros[i].idade < 18) {
            console.log(passageiros[i].nome);
            quantidade++
        }
    }
    console.log("\n Nesta viagem há " + quantidade + " passageiros menores de idade.");
}

function mostrarIdosos() {
    console.log("\n=== IDOSOS ===");
    console.log("Esses são os passageiros com 60 anos ou mais: \n");
    var quantidade = 0;
    for (var i = 0; i < passageiros.length; i++) {
        if (passageiros[i].idade >= 60) {
            console.log(passageiros[i].nome);
            quantidade++
        }
    }
    console.log("\n Nesta viagem há " + quantidade + " passageiros com mais de 60 anos.");
}

function mostrarPassagem() {
    console.log("\n=== PASSAGENS ===");
    console.log("Esses são os passageiros que ainda não pagaram a passagem: \n");
    var quantidade = 0;
    for (var i = 0; i < passageiros.length; i++) {
        if (passageiros[i].pagouPassagem !== true) {
            console.log(passageiros[i].nome);
            quantidade++
        }
    }
    console.log("\n Nesta viagem há " + quantidade + " passageiros que ainda não pagaram a passagem.");
}

function mediaIdade() {
    console.log("\n=== IDADE ===");
    console.log("Essa é a média de idade dos passageiros do ônibus: \n");
    var soma = 0;
    for (var i = 0; i < passageiros.length; i++) {
        soma += passageiros[i].idade;
        console.log(passageiros[i].nome + " | " + passageiros[i].idade + " anos."
        );
    }
    var media = soma / passageiros.length;
    console.log("\n A média da idade dos passageiros é de " + media + " anos.");
}

function verDestinos() {
    console.log("\n=== DESTINOS ===");
    var destino = leia.keyInSelect(destinos, "Selecione um destino.");
    console.log("Esses são todos os passageiros que vão para esse destino: \n");
    if (destino === 0) {
        for (var i = 0; i < passageiros.length; i++) {
            if (passageiros[i].destino === destinos[0]) {
                console.log(passageiros[i].nome);
            }
        }
    }
    if (destino === 1) {
        for (var i = 0; i < passageiros.length; i++) {
            if (passageiros[i].destino === destinos[1]) {
                console.log(passageiros[i].nome);
            }
        }
    }
    if (destino === 2) {
        for (var i = 0; i < passageiros.length; i++) {
            if (passageiros[i].destino === destinos[2]) {
                console.log(passageiros[i].nome);
            }
        }
    }
    if (destino === 3) {
        for (var i = 0; i < passageiros.length; i++) {
            if (passageiros[i].destino === destinos[3]) {
                console.log(passageiros[i].nome);
            }
        }
    }
    if (destino === 4) {
        for (var i = 0; i < passageiros.length; i++) {
            if (passageiros[i].destino === destinos[4]) {
                console.log(passageiros[i].nome);
            }
        }
    }
}

function continuar() {
    var continuar = leia.keyInSelect(["Voltar"], "Confirme para voltar ao menu principal.");
}

var opcoes = [
    "Mostrar passageiros",
    "Mostrar passageiros menores de idade",
    "Mostrar passageiros maiores de 60 anos",
    "Mostrar passageiros que não pagaram a passagem",
    "Mostrar média de idade dos passageiros",
    "Mostrar passageiros do destino",
    "Parar sistema"
]

do {
    console.clear();
    console.log("\n=== ÔNIBUS ===");

    var opcao = leia.keyInSelect(opcoes, "Selecione uma opção: ");

    if (opcao === 0) {
        mostrarPassageiros();
        continuar();
    }
    if (opcao === 1) {
        mostrarMenoresDeIdade();
        continuar();
    }
    if (opcao === 2) {
        mostrarIdosos();
        continuar();
    }
    if (opcao === 3) {
        mostrarPassagem();
        continuar();
    }
    if (opcao === 4) {
        mediaIdade();
        continuar();
    }
    if (opcao === 5) {
        verDestinos();
        continuar();
    }
} while (opcao !== 6);