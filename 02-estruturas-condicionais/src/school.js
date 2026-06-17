import leia from 'readline-sync';

var nota1 = leia.questionFloat("Digite sua primeira nota: ")
var nota2 = leia.questionFloat("Digite sua segunda nota: ")
var nota3 = leia.questionFloat("Digite sua terceira nota: ")
var nota4 = leia.questionFloat("Digite sua quarta nota: ")
var nota5 = leia.questionFloat("Digite sua quinta nota: ")
var media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
var frequencia =  leia.questionInt("Digite sua frequencia: ")

if(media >= 7 && media <= 10 && frequencia >= 75 && frequencia <= 100){
    console.log("Parabéns, voce foi aprovado!")
}else if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 || nota5 > 10 || frequencia > 100){
    console.log("Coloque numeros validos! Notas sao de 0 a 10 e a frequencia de 0 a 100!")
}else{
    console.log("Eu sinto muito, mas voce foi reprovado...")
}