import leia from 'readline-sync';

export function exercicio01() {
    var secret = "1234";
    var password = leia.questionInt("Type the password: ");
    if (password === secret) {
        console.log("OK!");
    } else {
        console.log("WRONG!");
    }
}