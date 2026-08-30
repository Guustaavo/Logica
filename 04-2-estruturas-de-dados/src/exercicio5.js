import leia from 'readline-sync';
/*
Crie um vetor contendo objetos representando mesas de um restaurante. Cada mesa
deverá possuir: numero, ocupada, pedidos, totalConta. O atributo pedidos deverá ser um
vetor. O programa deverá permitir:
1 - Mostrar mesas
2 - Ocupar mesa
3 - Adicionar pedido
4 - Fechar conta
5 - Mostrar mesa com maior conta
6 - Mostrar faturamento atual
0 - Sair
Ao adicionar um pedido, solicite: Nome do item. Valor. O pedido deverá ser adicionado ao
vetor de pedidos da mesa escolhida. Ao fechar a conta, mostre todos os pedidos daquela
mesa e o valor total. Depois, a mesa deverá voltar a ficar disponível.
*/

var restaurante = [];
for (var i = 1; i <= 5; i++) {
    var mesa = {
        numero: i,
        ocupada: false,
        pedidos: [],
        totalConta: 0,
    }
    restaurante.push(mesa);
}

function mostrarMesas() {
    console.log("\n=== MOSTRAR MESAS ===\n");
    restaurante.forEach((mesa) => {
        console.log("Número: " + mesa.numero);
        console.log("Ocupada: " + mesa.ocupada);
        console.log("Pedidos: " + mesa.pedidos);
        console.log("Conta: " + mesa.totalConta);
        console.log("\n");
    })
}

function ocuparMesa() {
    console.log("\n=== OCUPAR MESA ===\n");
    var opcoes = [];
    restaurante.forEach((mesa) => {
        opcoes.push(mesa.numero);
    })
    var escolha = leia.keyInSelect(opcoes, "Escolha a mesa que deseja reservar: ");
    if (restaurante[escolha].ocupada === false) {
        console.log("Mesa reservada com sucesso.");
        restaurante[escolha].ocupada = true;
    }
    else {
        console.log("Esta mesa já está ocupada.");
    }
}

function adicionarPedido() {
    console.log("\n=== ADICIONAR PEDIDO ===\n");
    var opcoes = [];
    restaurante.forEach((mesa) => {
        opcoes.push(mesa.numero);
    })
    var escolha = leia.keyInSelect(opcoes, "Selecione a mesa que deseja adicionar pedido: ")
    restaurante.forEach((mesa) => {
        if (mesa.numero === (escolha + 1)) {
            if (mesa.ocupada === true) {
                var nome = leia.question("Nome do item: ");
                var valor = leia.questionFloat("Valor do item: ");
                mesa.pedidos.push(nome);
                mesa.totalConta += valor;
            }
            else {
                console.log("Essa mesa não tem dono para ser adicionado pedido.");
            }
        }
    })
}

function fecharConta() {
    console.log("\n=== FECHAR CONTA ===\n");
    var opcoes = [];
    restaurante.forEach((mesa) => {
        opcoes.push(mesa.numero);
    })
    var escolha = leia.keyInSelect(opcoes, "Escolha a mesa que deseja fechar a conta: ");
    restaurante.forEach((mesa) => {
        if (mesa.numero === (escolha + 1)) {
            if (mesa.ocupada === true) {
                console.log("Número: " + mesa.numero);
                console.log("Pedidos: ");
                console.log(mesa.pedidos);
                console.log("Conta: R$" + mesa.totalConta);
                mesa.ocupada = false;
                mesa.pedidos = [];
                mesa.totalConta = 0;
                console.log("\nConta fechada.\n");
            }
            else {
                console.log("Não há conta para fechar nesta mesa.");
            }
        }
    })
}

function mostrarMaiorConta() {
    console.log("\n=== MESA COM MAIOR CONTA ===\n");
    var maiorConta = restaurante[0].totalConta;
    var numero = restaurante[0].numero;
    var pedidos = restaurante[0].pedidos;

    for (var i = 0; i < restaurante.length; i++) {
        if (restaurante[i].totalConta > maiorConta) {
            maiorConta = restaurante[i].totalConta;
            numero = restaurante[i].numero;
            pedidos = restaurante[i].pedidos;
        }
    }
    console.log("A mesa com a maior conta é a mesa de número: " + numero);
    console.log("Pedidos: " + pedidos);
    console.log("Conta: " + maiorConta);
}

function mostrarFaturamento() {
    console.log("\n=== VER FATURAMENTO ATUAL ===\n");
    var faturamento = 0;
    restaurante.forEach((mesa) => {
        faturamento += mesa.totalConta;
    })
    console.log("O faturamento atual de todas as nossas mesas é de: R$" + faturamento);
}

function continuar() {
    var continuar = leia.keyInSelect(["Voltar"], "Confirme para voltar ao menu principal.");
}

var opcoes = [
    "Mostrar mesas",
    "Ocupar mesa",
    "Adicionar pedido",
    "Fechar conta",
    "Mostrar mesa com maior conta",
    "Mostrar faturamento atual",
    "Parar sistema"
]

do {
    console.clear();
    console.log("\n=== RESTAURANTE ===");

    var opcao = leia.keyInSelect(opcoes, "Selecione uma opção: ");

    if (opcao === 0) {
        mostrarMesas();
        continuar();
    }
    if (opcao === 1) {
        ocuparMesa();
        continuar();
    }
    if (opcao === 2) {
        adicionarPedido();
        continuar();
    }
    if (opcao === 3) {
        fecharConta();
        continuar();
    }
    if (opcao === 4) {
        mostrarMaiorConta();
        continuar();
    }
    if (opcao === 5) {
        mostrarFaturamento();
        continuar();
    }
} while (opcao !== 6);