import leia from 'readline-sync';

const partes = [
    `
  +---+
  |   |
      |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavras = [
    "javascript", "computador", "programacao", "algoritmo", "variavel",
    "funcao", "terminal", "internet", "logica", "senai", "teclado"
]

var letrasCertas = [];
var letrasErradas = [];
var tentativas = 6;
var venceu = false;

var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavraSecreta);

function desenhaforca(errors) {
    console.log(partes[errors]);
}

while (tentativas > 0 && venceu === false) {
    console.clear();
    console.log(" ========JOGO DA FORCA======== ");

    desenhaforca(letrasErradas.length);
    let palavramontada = " ";
    for (var i = 0; i < palavraSecreta.length; i++) {

        // verifica se existe na lista um determinado item
        if (letrasCertas.includes(palavraSecreta[i])) {
            palavramontada += palavraSecreta[i] + " "
        } else {
            palavramontada += "_ "
        }
    }
    console.log("palavras: " + palavramontada);
    console.log("tentativas restantes: " + tentativas);
    console.log("letras erradas: " + letrasErradas.join(', '));

    let letra = leia.question("DIGITE UMA LETRA: ").toLowerCase();//converter para minusculo
    if (letra.length !== 1) {
        console.log("digite apenas uma letra");
        leia.question("pressione ENTER para continuar...");
    } else if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
        console.log("você ja tentou essa letra!");
        leia.question("pressione ENTER para continuar...");
    } else if (palavraSecreta.includes(letra)) {
        letrasCertas.push(letra);
    } else {
        letrasErradas.push(letra);
        tentativas--;
    }

    venceu = true;
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (letrasCertas.includes(palavraSecreta[i]) === false) {
            venceu = false;
        }
    }
}


console.clear();
console.log("===JOGO DA FORCA===");
desenhaforca(letrasErradas.length);
if (venceu === true) {
    console.log("parabens, você venceu!!");
    console.log("a palavra certa era: " + palavraSecreta);
} else {
    console.log("você perdeu!")
    console.log("a palavra certa era: " + palavraSecreta);
}