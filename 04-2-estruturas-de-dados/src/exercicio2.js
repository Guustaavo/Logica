import leia from 'readline-sync';
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
        destino: "Floripa",
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

function mostrarPassageiros() {
    console.log("=== PASSAGEIROS ===");
    passageiros.forEach((passageiro) => {
        console.log("Nome: - " + passageiro.nome + " | " + passageiro.idade + " anos.");
    })
}