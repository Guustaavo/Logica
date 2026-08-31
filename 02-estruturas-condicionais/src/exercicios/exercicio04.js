import leia from 'readline-sync';

var apples = leia.questionInt("Type the amount of apples you are gonna purchase: ");

if (apples < 12) {
    console.log("O preço ficará R$" + apples * 0.30);
} else {
    console.log("O preço ficará R$" + apples * 0.25);
}