export default {
    cafe: {
        nome: "cafe",
        descricao: "Café",
        extra: false,
        preco: 3.00
    },
    chantily: {
        nome: "chantily",
        descricao: "Chantily (cafe)",
        extra: "cafe",
        preco: 1.50
    },
    suco: {
        nome: "suco",
        descricao: "Suco Natural",
        extra: false,
        preco: 6.20
    },
    sanduiche: {
        nome: "sanduiche",
        descricao: "Sanduíche",
        "extra": false,
        "preco": 6.50
    },
    queijo: {
        nome: "queijo",
        descricao: "Queijo (sanduiche)",
        extra: "sanduiche",
        preco: 2.00
    },
    salgado: {
        nome: "salgado",
        descricao: "Salgado",
        extra: false,
        preco: 7.25
    },
    combo1: {
        nome: "combo1",
        descricao: ["suco,1", "sanduiche,1"],
        extra: false,
        preco: 9.50
    },
    combo2: {
        nome: "combo2",
        descricao: ["cafe,1", "sanduiche,1"],
        extra: false,
        preco: 7.50
    }
}
