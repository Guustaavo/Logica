import leia from 'readline-sync';
// Crie um algoritmo para mostrar a tabuada de um número até 10. Você deve solicitar ao usuário o número do qual ele deseja a tabuada. 
// O algoritmo deve mostrar a tabuada de um número que ele digitar.

var numero = leia.questionInt("Informe o número: ")
var contador = 0

while(contador <= 10){
    console.log(numero + " X " + contador + " = " + (numero * contador));
    contador++
}