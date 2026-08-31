import leia from 'readline-sync';

var time1 = leia.questionInt("Digite a quantidade de gols feitos pelo primeiro time: ");
var time2 = leia.questionInt("Digite a quantidade de gols feitos pelo segundo time: ");
var diferenca = time1 - time2;
var diferenca2 = time2 - time1;

if (diferenca === 0) {
    console.log("Esse jogo foi um empate!!!");
} else if (diferenca >= 1 && diferenca <= 3 || diferenca2 >= 1 && diferenca2 <= 3) {
    console.log("Esse jogo foi uma partida normal!");
} else if (diferenca >= 4 || diferenca2 >= 4) {
    console.log("Esse jogo foi uma goleada!!!");
} else {
    console.log("Gols negativos?");
}