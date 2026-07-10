import leia from 'readline-sync';

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

desenhar();