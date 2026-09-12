import leia from 'readline-sync';
/* 
Crie um vetor contendo 15 objetos representando vagas de um estacionamento. Cada vaga deverá possuir:

numero
ocupada
placa
modelo

O programa deverá apresentar o seguinte menu:
1 - Mostrar vagas
2 - Ocupar vaga
3 - Liberar vaga
4 - Mostrar quantidade de vagas livres
5 - Mostrar quantidade de vagas ocupadas
6 - Buscar veículo pela placa
0 - Encerrar 

Ao ocupar uma vaga, o usuário deverá informar o número da vaga, a placa e o modelo do veículo.
Ao liberar uma vaga, o programa deverá percorrer o vetor procurando a vaga pelo número informado.
Ao buscar um veículo, o programa deverá percorrer o vetor procurando pela placa informada.
Não permita ocupar uma vaga que já esteja ocupada.
Não permita liberar uma vaga que esteja livre.
Ao final do programa, mostre a porcentagem de ocupação do estacionamento.
*/

var estacionamento = [];

for (var i = 0; i < 15; i++) {
    var vaga = {
        numero: i + 1,
        ocupada: false,
        placa: "",
        modelo: "",
    }
    estacionamento.push(vaga);
}

function mostrarVagas() {
    estacionamento.forEach((vaga) => {
        console.log("Vaga: " + vaga.numero);
        console.log("Ocupada: " + vaga.ocupada);
        console.log("\n");
    })
}

function ocuparVaga() {
    var vagas = [];
    estacionamento.forEach((vaga) => {
        vagas.push(vaga.numero);
    })
    var opcao = leia.keyInSelect(vagas, "Selecione a vaga que deseja ocupar.");
    for (var i = 0; i < vagas.length; i++) {
        if (opcao === vagas[i]) {
            estacionamento.forEach((vaga) => {
                if (vaga.numero === vagas[i + 1]) {
                    if (vaga.ocupada === true) {
                        console.log("Esta vaga já está ocupada. Por favor, selecione outra para ocupar, ou espere até essa vaga ficar liberada.");
                        console.log("\n");
                    }
                    if (vaga.ocupada === false) {
                        var modelo = leia.question("Digite o modelo do veículo: ");
                        var placa = leia.question("Digite a placa do veículo: ");
                        vaga.ocupada = true;
                        console.log("\n");
                        console.log("Vaga ocupada com sucesso.");
                        console.log("\n");
                    }
                }
            })
        }
    }
}