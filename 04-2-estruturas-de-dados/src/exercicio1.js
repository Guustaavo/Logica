import leia from 'readline-sync';
/*
Crie um vetor com 20 objetos representando assentos de uma sala de cinema. Cada
assento deverá possuir: - número, ocupado, tipo. O tipo poderá ser "normal" ou
"preferencial". O programa deverá apresentar um menu:
1 - Mostrar assentos
 2 - Reservar assento
 3 - Cancelar reserva
 4 - Mostrar quantidade de assentos livres
 5 - Mostrar quantidade de assentos ocupados
 0 - Encerrar
Sempre que o usuário solicitar uma reserva ou cancelamento, o programa deverá percorrer
o vetor procurando o assento informado. Ao final, também informe a porcentagem de
ocupação da sala.
*/

var cinema = [];
for (var i = 0; i < 20; i++) {
    var cadeira = {
        numero: (i < 10) ? "A" + (i + 1) : "B" + (i - 9),
        ocupado: false,
        tipo: (i < 5) ? "Preferencial" : "Normal"
    }
    cinema.push(cadeira);
}

function mostrarCinema() {
    console.log("=== CADEIRAS ===");
    cinema.forEach((cadeira) => {
        var situacao = cadeira.ocupado === true ? "OCUPADA" : "LIVRE";
        console.log("Assento - " + cadeira.numero + " | " + cadeira.tipo + " | " + situacao)
    })
}

function reservar() {
    var reserva = leia.question("INFORME O ASSENTO: [A1-10 - B1-10]").toUpperCase();
    var encontrouCadeira = false;

    cinema.forEach((cadeira) => {
        if (cadeira.numero === reserva) {
            encontrouCadeira = true;
            if (cadeira.ocupado === true) {
                console.log("ESTA CADEIRA JÁ ESTÁ OCUPADA! TENTE NOVAMENTE!");
            } else {
                cadeira.ocupado = true;
                console.log("CADEIRA RESERVADA COM SUCESSO!")
            }
            return;
        }
    })
    if (encontrouCadeira === false) {
        console.log("CADEIRA INFORMADA NÃO EXISTE.")
    }
}

function cancelar() {
    var cancelamento = leia.question("INFORME O ASSENTO: [A1-10 - B1-10]").toUpperCase();
    var encontrouCadeira = false;

    cinema.forEach((cadeira) => {
        if (cadeira.numero === cancelamento) {
            encontrouCadeira = true;
            if (cadeira.ocupado === false) {
                console.log("ESTA CADEIRA NÃO ESTÁ OCUPADA! TENTE NOVAMENTE!");
            } else {
                cadeira.ocupado = false;
                console.log("CADEIRA CANCELADA COM SUCESSO!")
            }
            return;
        }
    })
    if (encontrouCadeira === false) {
        console.log("CADEIRA INFORMADA NÃO EXISTE.")
    }
}

function mostrarLivres() {
    var contador = 0;
    console.log("=== CADEIRAS LIVRES ===")
    cinema.forEach((cadeira) => {
        if (cadeira.ocupado === false) {
            contador++;
            console.log("Cadeira livre: " + cadeira.numero + " | " + cadeira.tipo)
        }
    })
    console.log("A quantidade de cadeiras livres é: " + contador)
}

function mostrarOcupadas() {
    var contador = 0;
    console.log("=== CADEIRAS OCUPADAS ===")
    cinema.forEach((cadeira) => {
        if (cadeira.ocupado === true) {
            contador++;
            console.log("Cadeira ocupada: " + cadeira.numero + " | " + cadeira.tipo)
        }
    })
    console.log("A quantidade de cadeiras ocupadas é: " + contador)
}

function continuar() {
    var continuar = leia.keyInSelect(["Voltar"], "Confirme para voltar ao menu principal.");
}

var opcao;
do {
    console.clear();
    console.log("\n=====CINEMA=====");
    console.log("1 - Mostrar assentos");
    console.log("2 - Reservar assentos");
    console.log("3 - Cancelar assentos");
    console.log("4 - Mostrar quantidade livres");
    console.log("5 - Mostrar quantidade ocupados");
    console.log("0 - Sair");

    opcao = leia.questionInt("INFORME UMA OPCAO: ")

    switch (opcao) {
        case 1:
            mostrarCinema();
            continuar();
            break;
        case 2:
            reservar();
            continuar();
            break;
        case 3:
            cancelar();
            continuar();
            break;
        case 4:
            mostrarLivres();
            continuar();
            break;
        case 5:
            mostrarOcupadas();
            continuar();
            break;
        default:
            console.log("Sistema encerrado!")
    }

} while (opcao !== 0);