import leia from 'readline-sync';
// Contagem de 10 até 500, depois de 900 até 1000, usando apenas um laço de repetição.
export function exercicio07() {
    var i = 10;
    do {
        console.log(i);
        i++;
        if (i === 501) {
            i = 900;
        }
    } while (i <= 1000);
}