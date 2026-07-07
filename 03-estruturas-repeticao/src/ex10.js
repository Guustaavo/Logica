import leia from 'readline-sync';
// Valentina tem 1.50m e cresce 2 centímetros por ano, enquanto Joãozinho, seu irmão mais novo, tem 1.40m e cresce 3 centímetros por ano. 
// Crie um algoritmo que mostre quando (quantos anos) Enzo será mais alto que Valentina.

var valentina = 1.50
var joaozinho = 1.40
var ano = 0

do{
    console.log("Ano: " + ano)
    console.log("Altura de Valentina: " + valentina.toFixed(2))
    console.log("Altura de Joãozinho: " + joaozinho.toFixed(2))
    valentina += 0.02
    joaozinho += 0.03
    ano++
}while(valentina >= joaozinho)
    console.log("- - - - -")
    console.log("Joãozinho ficará mais alto que Valentina em " + ano + " anos.")