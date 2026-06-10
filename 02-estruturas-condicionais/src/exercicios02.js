import leia from 'readline-sync';

var numero = leia.questionInt("Type the number: ");
if(numero % 2 === 0){
    console.log("PAR!")
}else{
    console.log("IMPAR!")
}