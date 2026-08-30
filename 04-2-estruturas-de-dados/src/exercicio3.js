import leia from 'readline-sync';
/*
Crie um vetor contendo 10 objetos representando compromissos. Cada compromisso
deverá possuir: descricao, dia, horario, concluido
Crie um menu:
1 - Listar todos os compromissos
2 - Listar compromissos pendentes
3 - Marcar compromisso como concluído
4 - Mostrar compromissos de um determinado dia
5 - Mostrar quantidade de compromissos concluídos
6 - Mostrar quantidade de compromissos pendentes
0 - Sair
Todas as buscas deverão ser feitas utilizando estruturas de repetição.
*/

var compromissos = [
    {
        dia: "Sábado",
        horario: 17,
        descricao: "Culto dos jovens",
        concluido: false,
    },
    {
        dia: "Sexta-feira",
        horario: 19,
        descricao: "Curso",
        concluido: false,
    },
    {
        dia: "Domingo",
        horario: 8,
        descricao: "Culto especial",
        concluido: false,
    },
    {
        dia: "Segunda-feira",
        horario: 15,
        descricao: "Vôlei",
        concluido: false,
    },
    {
        dia: "Quarta-feira",
        horario: 10,
        descricao: "Senai",
        concluido: false,
    }
]

function listarCompromissos() {
    console.log("\n=== COMPROMISSOS ===\n");
    var i = 1;
    compromissos.forEach((compromisso) => {
        console.log(i);
        console.log("Compromisso: " + compromisso.descricao);
        console.log("Dia: " + compromisso.dia);
        console.log("Horário: " + compromisso.horario);
        console.log("Concluído: " + compromisso.concluido);
        i++;
        console.log("\n");
    })
}

function listarPendentes() {
    console.log("\n=== COMPROMISSOS PENDENTES ===\n");
    var i = 1;
    compromissos.forEach((compromisso) => {
        if (compromisso.concluido !== true) {
            console.log(i);
            console.log("Compromisso: " + compromisso.descricao);
            console.log("Dia: " + compromisso.dia);
            console.log("Horário: " + compromisso.horario);
            console.log("\n");
        }
        i++;
    })
}

function marcarConcluido() {
    var opcoes = [];
    compromissos.forEach((compromisso) => {
        opcoes.push(compromisso.descricao);
    })
    console.log("\n=== MARCAR COMO CONCLUÍDO ===\n");
    var escolha = leia.keyInSelect(opcoes, "Selecione um exercício para marcar como concluído: ");
    for (var i = 0; i < opcoes.length; i++) {
        if (escolha === i) {
            compromissos[i].concluido = true;
            console.log(compromissos[i].descricao + " foi marcado como concluído.");
        }
    }
}

function mostrarDia() {
    var opcoes = [];
    var j = 1;
    compromissos.forEach((compromisso) => {
        opcoes.push(compromisso.dia);
    })
    console.log("\n=== MOSTRAR DIAS ===\n");
    var escolha = leia.keyInSelect(opcoes, "Selecione um dia para ver os compromissos: ");
    for (var i = 0; i < opcoes.length; i++) {
        if (escolha === i) {
            compromissos.forEach((compromisso) => {
                if (compromisso.dia === opcoes[i]) {
                    console.log(j);
                    console.log("Compromisso: " + compromisso.descricao);
                    console.log("Horário: " + compromisso.horario);
                    console.log("Concluído: " + compromisso.concluido);
                    console.log("\n");
                }
                j++;
            })
        }
    }
}

function mostrarConcluidos() {
    var i = 1;
    var j = 0;
    console.log("\n=== COMPROMISSOS CONCLUÍDOS ===\n");
    compromissos.forEach((compromisso) => {
        if (compromisso.concluido === true) {
            console.log(i);
            console.log("Compromisso: " + compromisso.descricao);
            console.log("Dia: " + compromisso.dia);
            console.log("Horário: " + compromisso.horario);
            j++;
            console.log("\n");
        }
        i++;
    })
    console.log(j + " compromissos já foram concluídos.");
}

function mostrarPendentes() {
    var i = 1;
    var j = 0;
    console.log("\n=== QUANTIDADE DE PENDENTES ===\n");
    compromissos.forEach((compromisso) => {
        if (compromisso.concluido === false) {
            console.log(i);
            console.log("Compromisso: " + compromisso.descricao);
            console.log("Dia: " + compromisso.dia);
            console.log("Horário: " + compromisso.horario);
            j++;
            console.log("\n");
        }
        i++;
    })
    console.log("Você têm " + j + " compromissos pendentes.");
}

function continuar() {
    var continuar = leia.keyInSelect(["Voltar"], "Confirme para voltar ao menu principal.");
}

var opcoes = [
    "Listar todos os compromissos",
    "Listar compromissos pendentes",
    "Marcar compromisso como concluído",
    "Mostrar compromissos de um determinado dia",
    "Mostrar quantidade de compromissos concluídos",
    "Mostrar quantidade de compromissos pendentes",
    "Parar sistema"
]

do {
    console.clear();
    console.log("\n=== AGENDA DE COMPROMISSOS ===");

    var opcao = leia.keyInSelect(opcoes, "Selecione uma opção: ");

    if (opcao === 0) {
        listarCompromissos();
        continuar();
    }
    if (opcao === 1) {
        listarPendentes();
        continuar();
    }
    if (opcao === 2) {
        marcarConcluido();
        continuar();
    }
    if (opcao === 3) {
        mostrarDia();
        continuar();
    }
    if (opcao === 4) {
        mostrarConcluidos();
        continuar();
    }
    if (opcao === 5) {
        mostrarPendentes();
        continuar();
    }
} while (opcao !== 6);