import leia from 'readline-sync';

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

function mostrarLivres(){
    var contador = 0;
    console.log("=== CADEIRAS LIVRES ===")
    cinema.forEach((cadeira) => {
        if(cadeira.ocupado === false){
            contador++;
            console.log("Cadeira livre: " + cadeira.numero + " | " + cadeira.tipo)
        }
    })
    console.log("A quantidade de cadeiras livres é: " + contador)
}

function mostrarOcupadas(){
    var contador = 0;
    console.log("=== CADEIRAS OCUPADAS ===")
    cinema.forEach((cadeira) => {
        if(cadeira.ocupado === true){
            contador++;
            console.log("Cadeira ocupada: " + cadeira.numero + " | " + cadeira.tipo)
        }
    })
    console.log("A quantidade de cadeiras ocupadas é: " + contador)
}

var opcao;
do {
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
            break;
        case 2:
            reservar();
            break;
        case 3:
            cancelar();
            break;
        case 4:
            mostrarLivres();
            break;
        case 5:
            mostrarOcupadas();
            break;
        default:
            console.log("Sistema encerrado!")
    }

} while (opcao !== 0);