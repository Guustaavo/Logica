import leia from 'readline-sync';

var options = ["ROCK", "PAPER", "SCISSORS"];

var computerChoose = Math.floor(Math.random() * 3);
var userChoose = leia.keyInSelect(options, "Select an option: ");

if(userChoose === -1){
    console.log("Unavailable, game over!");
} else {
    console.log("You choose: " + options[userChoose]);
    console.log("The computer chooses: " + options[computerChoose]);

    if(computerChoose === userChoose){
        console.log("Damn it bro, that is a DRAW!");
    } else if(userChoose === 0 && computerChoose === 2 ||
              userChoose === 1 && computerChoose === 0 ||
              userChoose === 2 && computerChoose === 1
    ){
        console.log("Player wins!");
    }else {
        console.log("Computer wins!");
    }
}