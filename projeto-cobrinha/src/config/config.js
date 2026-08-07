export const SIMBOLOS = {
    parede: "⬜",
    vazio: "⬛",
    cabeca: "🟢",
    corpo: "🟩",
    obstaculo: "🧱",
    inimigo: "👻",
    portal1: "🌀",
    portal2: "🔵",
};

export const CONFIGURACOES = {
    largura: 30,
    altura: 15,
}

export const TIPOS_COMIDA = [
    {
        nome: "Maçã",
        simbolo: "🍎",
        pontos: 10,
        chance: 60,
        especial: false,
    },
    {
        nome: "Uva",
        simbolo: "🍇",
        pontos: 20,
        chance: 25,
        especial: false,
    },
    {
        nome: "Hambúrguer",
        simbolo: "🍔",
        pontos: 30,
        chance: 10,
        especial: false,
    },
    {
        nome: "Estrela",
        simbolo: "⭐",
        pontos: 50,
        chance: 5,
        especial: true,
    },
];

export const TIPOS_POWER_UP = [
    {
        tipo: "escudo",
        nome: "Escudo",
        simbolo: "🛡️",
    },
    {
        tipo: "vida",
        nome: "Vida extra",
        simbolo: "❤️",
    },
    {
        tipo: "lentidao",
        nome: "Câmera lenta",
        simbolo: "🐢",
    },
    {
        tipo: "cortar",
        nome: "Diminuir corpo",
        simbolo: "✂️",
    },
    {
        tipo: "bonus",
        nome: "Bônus",
        simbolo: "💎",
    },
];

export const DIFICULDADES = {
    0: {
        nome: "Fácil",
        velocidade: 220,
        vidas: 5,
        quantidadeObstaculos: 3,
        atravessarParede: true,
        inimigo: false
    },
    1: {
        nome: "Médio",
        velocidade: 160,
        vidas: 3,
        quantidadeObstaculos: 6,
        atravessarParede: false,
        inimigo: true
    },
    2: {
        nome: "Dificil",
        velocidade: 100,
        vidas: 2,
        quantidadeObstaculos: 10,
        atravessarParede: false,
        inimigo: true
    }
}