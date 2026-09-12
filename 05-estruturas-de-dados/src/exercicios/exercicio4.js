import leia from 'readline-sync';
/*
Crie um vetor contendo objetos representando livros. Cada livro deverá possuir: titulo,
autor, ano, emprestado. Crie um menu:
1 - Listar livros
2 - Mostrar livros disponíveis
3 - Emprestar livro
4 - Devolver livro
5 - Mostrar livro mais antigo
6 - Mostrar livro mais recente
7 - Buscar livros por autor
0 - Encerrar
Para emprestar ou devolver um livro, o programa deverá percorrer todo o vetor procurando
pelo título informado.
*/

var livros = [
    {
        titulo: "Bíblia",
        autor: "Deus",
        ano: 100,
        emprestado: false,
    },
    {
        titulo: "One Piece",
        autor: "Eiichiro Oda",
        ano: 1997,
        emprestado: false,
    },
    {
        titulo: "How to Win",
        autor: "Winner",
        ano: 2026,
        emprestado: false,
    },
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        ano: 1943,
        emprestado: false,
    },
    {
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        ano: 2012,
        emprestado: false,
    }
]

function listarLivros() {
    var i = 1;
    console.log("\n=== LIVROS ===\n");
    livros.forEach((livro) => {
        console.log(i);
        console.log("Título: " + livro.titulo);
        console.log("Autor: " + livro.autor);
        console.log("Ano: " + livro.ano);
        if (livro.emprestado === false) {
            console.log("Livro disponível.");
        }
        else {
            console.log("Livro indisponível.");
        }
        i++;
    })
}

function mostrarLivrosDisponiveis() {
    var i = 1;
    console.log("\n=== LIVROS DISPONÍVEIS ===\n");
    livros.forEach((livro) => {
        if (livro.emprestado === false) {
            console.log(i);
            console.log("Título: " + livro.titulo);
            console.log("Autor: " + livro.autor);
            console.log("Ano: " + livro.ano);
        }
        i++;
    })
}

function emprestarLivro() {
    var opcoes = [];
    livros.forEach((livro) => {
        opcoes.push(livro.titulo);
    })
    console.log("\n=== OBTENHA UM LIVRO ===\n");
    var escolha = leia.keyInSelect(opcoes, "Selecione um livro para pegar emprestado: ");
    for (var i = 0; i < opcoes.length; i++) {
        if (escolha === i) {
            livros[i].emprestado = true;
        }
    }
}

function devolverLivro() {
    var opcoes = [];
    livros.forEach((livro) => {
        opcoes.push(livro.titulo);
    })
    console.log("\n=== DEVOLVA UM LIVRO ===\n");
    var escolha = leia.keyInSelect(opcoes, "Selecione o livro que deseja devolver: ");
    for (var i = 0; i < opcoes.length; i++) {
        if (escolha === i) {
            livros[i].emprestado = false;
        }
    }
}

function mostrarLivroMaisAntigo() {
    console.log("\n=== LIVRO MAIS ANTIGO ===\n");
    var maisAntigo = livros[0].ano;
    livros.forEach((livro) => {
        if (livro.ano < maisAntigo) {
            maisAntigo = livro.ano;
        }
    })
    livros.forEach((livro) => {
        if (livro.ano === maisAntigo) {
            console.log("Título: " + livro.titulo);
            console.log("Autor: " + livro.autor);
            console.log("Ano: " + livro.ano);
        }
    })
}

function mostrarLivroMaisRecente() {
    console.log("\n=== LIVRO MAIS RECENTE ===\n");
    var maisRecente = livros[0].ano;
    livros.forEach((livro) => {
        if (livro.ano > maisRecente) {
            maisRecente = livro.ano;
        }
    })
    livros.forEach((livro) => {
        if (livro.ano === maisRecente) {
            console.log("Título: " + livro.titulo);
            console.log("Autor: " + livro.autor);
            console.log("Ano: " + livro.ano);
        }
    })
}

function buscarPorAutor() {
    console.log("\n=== PESQUISAR AUTOR ===\n");
    var autor = leia.question("Escreva o nome do autor: ");
    livros.forEach((livro) => {
        if (livro.autor.toLowerCase() === autor.toLowerCase()) {
            console.log("Título: " + livro.titulo);
            console.log("Autor: " + livro.autor);
            console.log("Ano: " + livro.ano);
        }
    })
}

function continuar() {
    var continuar = leia.keyInSelect(["Voltar"], "Confirme para voltar ao menu principal.");
}

var opcoes = [
    "Listar livros",
    "Mostrar livros disponíveis",
    "Emprestar livro",
    "Devolver livro",
    "Mostrar livro mais antigo",
    "Mostrar livro mais recente",
    "Buscar livros por autor",
    "Parar sistema"
]

do {
    console.clear();
    console.log("\n=== LIVRARIA ===");

    var opcao = leia.keyInSelect(opcoes, "Selecione uma opção: ");

    if (opcao === 0) {
        listarLivros();
        continuar();
    }
    if (opcao === 1) {
        mostrarLivrosDisponiveis();
        continuar();
    }
    if (opcao === 2) {
        emprestarLivro();
        continuar();
    }
    if (opcao === 3) {
        devolverLivro();
        continuar();
    }
    if (opcao === 4) {
        mostrarLivroMaisAntigo();
        continuar();
    }
    if (opcao === 5) {
        mostrarLivroMaisRecente();
        continuar();
    }
    if (opcao === 6) {
        buscarPorAutor();
        continuar();
    }
} while (opcao !== 7);