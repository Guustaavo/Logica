import leia from 'readline-sync';

var matriz = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
]

function pedirPosicao(index){
    var linha = leia.questionInt("Selecione a linha: ");
    var coluna = leia.questionInt("Selecione a coluna: ");
    matriz[linha][coluna] = index % 2 === 0 ? "X" : "O";
    }


function desenhar(){
    for(var i = 0; i < matriz[0].length; i++){
        console.log(" " + matriz[i][0] + " | " + matriz[i][1] + " | " + matriz[i][2])
        if(i < 2){
        console.log("----------")
        }
    }
}

for(var i = 0; i < 9; i++){
    pedirPosicao(i);
    desenhar();
}