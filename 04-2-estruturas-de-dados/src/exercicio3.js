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