import leia from 'readline-sync';

var maiorMedia = 0;
var melhorAluno = "";

for (var i = 1; i <= 10; i++) {
    console.log("")
    console.log("Aluno " + i);

    var nome = leia.question("Nome: ");
    var nota1 = leia.questionFloat("Nota 1: ");
    var nota2 = leia.questionFloat("Nota 2: ");
    var nota3 = leia.questionFloat("Nota 3: ");

    var media = (nota1 + nota2 + nota3) / 3;

    console.log("Media: " + media.toFixed(2));

    if (i === 1 || media > maiorMedia) {
        maiorMedia = media;
        melhorAluno = nome;
    }
}

console.log("")
console.log("=== RESULTADO ===");
console.log("Aluno com a maior media: " + melhorAluno);
console.log("Maior media: " + maiorMedia.toFixed(2));