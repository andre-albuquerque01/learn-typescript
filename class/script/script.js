"use strict";
// const frase = 'Andre is better'
// console.log(typeof frase);
// if (typeof frase === 'string')
//     console.log('A frase é string');
// else console.log('A frase não é string');
// let total: string | number = 200;
// total = '300'
// console.log(total);
// 11 -
// class Produto {
//     nome: string;
//     constructor(nome: string) {
//         this.nome = nome;
//     }
// realName() {
//     return `O nome verdadeiro é ${this.nome}`;
// }
// }
// const book = new Produto('Brasil melhor');
// console.log(book instanceof Produto);
// 11.3 -
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Book extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Gamer extends Produto {
    players;
    constructor(nome, players) {
        super(nome);
        this.players = players;
    }
}
function searchProduct(search) {
    if (search === 'Evangelho')
        return new Book('Biblia', 'Mateus, Marcos, Lucas e João');
    if (search === 'PES')
        return new Gamer('PES', 4);
    return null;
}
const produto = searchProduct('Evangelho');
if (produto instanceof Book)
    console.log(produto.autor);
if (produto instanceof Gamer) {
    console.log(produto.nome);
    console.log(produto.players);
}
if (produto instanceof Produto)
    console.log(produto.nome);
// interface Moto {
//     nome: string
// }
// const honda: Moto = {
//     nome: 'Yamaha '
// }
// console.log(honda instanceof Carro);
