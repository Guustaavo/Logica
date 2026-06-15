import leia from 'readline-sync';

var nome = leia.question("Digite o nome do funcionario: ")
var salario = leia.questionFloat("Digite quanto ele ganha: ")
var dependentes = leia.questionInt("Digite quantos dependentes ele possui: ")
var por0 = salario * 0.02
var por1 = salario * 0.05
var por2 = salario * 0.07
var por3 = salario * 0.10
var por4 = salario * 0.15

if(dependentes === 0){
    var se0 = por0 + salario
    console.log("Seu salario final sera de: " + se0)
}
if(dependentes === 1){
    var se1 = por1 + salario
    console.log("Seu salario final sera de: " + se1)
}
if(dependentes === 2){
    var se2 = por2 + salario
    console.log("Seu salario final sera de: " + se2)
}
if(dependentes === 3){
    var se3 = por3 + salario
    console.log("Seu salario final sera de: " + se3)
}
if(dependentes >= 4){
    var se4 = por4 + salario
    console.log("Seu salario final sera de: " + se4)
}