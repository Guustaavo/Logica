import leia from 'readline-sync'
// ATIVIDADE 9
export function sistema09() {
    console.log("-------------------------------")
    console.log("------| PARTIDA DE FUTEBOL |------")
    console.log("-------------------------------")

    let gols = Math.floor(Math.random() * 7) + 1;
    let dGols = Math.floor(Math.random() * 7) + 1;
    let digols;
    if (gols > dGols) {
        digols = gols - dGols;
    }
    else {
        digols = dGols - gols;
    }

    if (digols === 0) {
        console.log("oponente gols: " + dGols);
        console.log("seus gols: " + gols);
        console.log("empate");
    }
    else if (digols === 1 || digols === 2 || digols === 3) {
        console.log("oponente gols: " + dGols);
        console.log("seus gols: " + gols);
        console.log("diferença de gols: " + digols);
        console.log("partida normal");
    }
    else {
        console.log("oponente gols: " + dGols);
        console.log("seus gols: " + gols);
        console.log("diferença de gols: " + digols);
        console.log("goleada");
    }
}