import leia from 'readline-sync';

var produto = leia.questionFloat("Type the valor do produto: ")
var dollar = leia.questionInt("Type the quantidade de moedas de um real que voce tem: ") * 1
var half = leia.questionInt("Type the quantidade de moedas de 50 centavos que voce tem: ") * 0.50
var quarter = leia.questionInt("Type the quantidade de moedas de 25 centavos que voce tem: ") * 0.25
var dime = leia.questionInt("Type the quantidade de moedas de 10 centavos que voce tem: ") * 0.10
var nickel = leia.questionInt("Type the quantidade de moedas de 5 centavos que voce tem: ") * 0.5
var amount = dollar + half + quarter + dime + nickel

if(amount >= produto){
    console.log("Congrats! You can already buy it.");
    console.log("You have R$" + amount);
}else{
    console.log("Im sorry, but you still need money to buy it.");
    console.log("You have R$" + amount);
}