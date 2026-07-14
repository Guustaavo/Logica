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
    console.log("Palavras: " + palavramontada);
    console.log("Tentativas restantes: " + tentativas);
    console.log("Letras erradas: " + letrasErradas.join(', '));

    let letra = leia.question("DIGITE UMA LETRA: ").toLowerCase();//converter para minusculo
    if (letra.length !== 1) {
        console.log("Digite apenas uma letra");
        leia.question("Pressione ENTER para continuar...");
    } else if (letrasCertas.includes(letra) || letrasErradas.includes(letra)) {
        console.log("Você já tentou essa letra!");
        leia.question("Pressione ENTER para continuar...");
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
    console.log("Parabéns, você venceu!!");
    console.log("A palavra certa era: " + palavraSecreta);
} else {
    console.log("Você perdeu!")
    console.log("A palavra certa era: " + palavraSecreta);
}