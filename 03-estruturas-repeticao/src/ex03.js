import leia from 'readline-sync';
// Escreva um algoritmo que conta os números entre 1000 e 1999 e mostra apenas aqueles que divididos por 11 dão resto 5.

var mil = 1000

do{
    if(mil % 11 == 5){
    console.log(mil)
    }
    mil++
}while(mil <= 1999)