import leia from 'readline-sync';

var idade = leia.questionInt("Informe sua idade: ")

if (idade >= 18) {
    var nome = leia.question("Perfeito, digite o seu nome completo: ")
    console.log("Parabens! Voce foi autorizado com sucesso.")
} else if (idade < 18) {
    console.log("Primeiro, voce precisa da permissao dos seus pais.")
    var autorizacao = leia.keyInSelect([
        "SIM", "NAO"
    ])
    if (autorizacao === 0) {
        var nome = leia.question("Perfeito, digite o seu nome completo: ")
        console.log("Parabens! Voce foi autorizado com sucesso.")
    } else {
        console.log("Infelizmente voce precisara da autorizacao dos seus pais antes de fazer isto, volte quando ja tiver.")
    }
}