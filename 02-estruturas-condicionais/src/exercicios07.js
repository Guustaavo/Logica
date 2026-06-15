import leia from 'readline-sync';

var salario = leia.questionFloat("Digite o valor do salario: ")
var emprestimo = leia.questionFloat("Digite o valor do emprestimo: ")
var prestacoes = leia.questionInt("Digite o numero de prestacoes: ")

var valorPrestacao = emprestimo / prestacoes

if(valorPrestacao <= salario * 0.30){
    console.log("Emprestimo pode ser concedido.")
}else{
    console.log("Emprestimo nao pode ser concedido.")
}