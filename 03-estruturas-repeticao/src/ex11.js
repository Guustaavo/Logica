import leia from 'readline-sync';

var pessoas = 0;

var maiorAltura = 0;
var menorAltura;

var somaAlturas = 0;

var somaMulheres = 0;
var qtdMulheres = 0;

var qtdHomens = 0;

while (pessoas < 10) {

    var genero = leia.keyInSelect(["F", "M"], "INFORME O GENERO");
    var altura = leia.questionFloat("DIGITE SUA ALTURA: ");

    if (pessoas == 0) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (altura < menorAltura) {
        menorAltura = altura;
    }

    somaAlturas += altura;

    if (genero === 0) {
        somaMulheres += altura;
        qtdMulheres++;
    }

    if (genero === 1) {
        qtdHomens++;
    }

    pessoas++;
}

var mediaMulheres = qtdMulheres > 0 ? somaMulheres / qtdMulheres : 0;
var mediaPopulacao = somaAlturas / 10;
var percentualHomens = (qtdHomens / 10) * 100;

console.log("\nRESULTADOS");
console.log(`Maior altura: ${maiorAltura.toFixed(2)} m`);
console.log(`Menor altura: ${menorAltura.toFixed(2)} m`);
console.log(`Média das mulheres: ${mediaMulheres.toFixed(2)} m`);
console.log(`Média da população: ${mediaPopulacao.toFixed(2)} m`);
console.log(`Percentual de homens: ${percentualHomens.toFixed(2)}%`);