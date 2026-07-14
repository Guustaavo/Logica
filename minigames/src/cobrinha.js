import readline from 'readline';
import { toUSVString } from 'util';

const parede = "⬜";
const vazio = "⬛";
const cabeca = "🟢";
const corpo = "🟩";
const comida = "🔴";

var largura = 30; // X
var altura = 15; // Y

var cobraX = [10, 9, 8, 7];
var cobraY = [7, 7, 7, 7];

var comidaX = Math.floor(Math.random() * largura);
var comidaY = Math.floor(Math.random() * altura);

var pontos = 0;
var direcao = "d";
var gameOver = false;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdout.write("\x1b[?251");
process.stdin.on("keypress", (str, key) => {
    if(key.name === "q"){
        gameOver = true;
    }
    else if(key.name === "w" && direcao !== "w" && direcao !== "s"){
        direcao = "w"
    }
    else if(key.name === "a" && direcao !== "a" && direcao !== "d"){
        direcao = "a"
    }
    else if(key.name === "s" && direcao !== "s" && direcao !== "w"){
        direcao = "s"
    }
    else if(key.name === "d" && direcao !== "d" && direcao !== "a"){
        direcao = "d"
    }
})

function desenhar() {
    var tela = "";
    tela += "=== JOGO DA COBRINHA ===\n";
    tela += "W A S D = MOVER | Q = SAIR\n";
    tela += "Pontos: " + pontos + "\n\n";

    for(var y = -1; y <= altura; y++){
        var linha = "";
        for(var x = -1; x <= largura; x++){
            if(x === -1 || x === largura || y === -1 || y === altura){
                linha += parede;
            } else if(x === comidaX && y === comidaY){
                linha += comida;
            } else{
                var desenhouCobrinha = false;
                
                for(var i = 0; i < cobraX.length; i++){
                    if(cobraX[i] === x && cobraY[i] === y){
                        linha += (i === 0) ? cabeca : corpo;
                        desenhouCobrinha = true;
                    }
                }

                if(desenhouCobrinha === false){
                    linha += vazio;
                }
            }
        }
        tela += linha + "\n";
    }
    process.stdout.write("\x1b[H" + tela);
}

function sortearComida() {
    var posicaoValida = false;

    while(posicaoValida === false){
        comidaX = Math.floor(Math.random() * largura);
        comidaY = Math.floor(Math.random() * altura);

        posicaoValida = true;
        for(var i = 0; i < cobraX.length; i++){
            if(cobraX[i] === comidaX && cobraY[i] === comidaY){
                posicaoValida = false;
            }
        }
    }

}

function mover(){
    var novaPosicaoX = cobraX[0];
    var novaPosicaoY = cobraY[0];

    switch(direcao){
        case "w": 
            novaPosicaoY--;
            break;
        case "a": 
            novaPosicaoX--;
            break;
        case "s": 
            novaPosicaoY++;
            break;
        case "d": 
            novaPosicaoX++;
            break;
    }

    if(novaPosicaoX < 0 || novaPosicaoX >= largura || novaPosicaoY < 0 || novaPosicaoY >= altura){
        gameOver = true;
        return;
    }

    for(var i = 0; i < cobraX.length; i++){
        if (novaPosicaoX === cobraX[i] && novaPosicaoY === cobraY[i]){
            gameOver = true;
            return;
        }
    }

    cobraX.unshift(novaPosicaoX);
    cobraY.unshift(novaPosicaoY);

    if(novaPosicaoX === comidaX && novaPosicaoY === comidaY){
        pontos += 10;
        sortearComida();
    }else{
        cobraX.pop();
        cobraY.pop();
    }
}

var jogo = setInterval(() => {
    if(gameOver === true){
        clearInterval(jogo);
        process.stdout.write("\x1b[?25h");
        console.log("\n=== VOCÊ MORREU ===");
        console.log("Sua pontuação final foi de: " + pontos);
        process.exit();
    }

    mover();
    desenhar();
}, 150)