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