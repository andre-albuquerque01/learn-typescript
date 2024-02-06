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

// class Produto {
//     nome: string;

//     constructor(nome: string) {
//         this.nome = nome;
//     }
// }

// class Book extends Produto {
//     autor: string;

//     constructor(nome: string, autor: string) {
//         super(nome)
//         this.autor = autor
//     }
// }

// class Gamer extends Produto {
//     players: number;

//     constructor(nome: string, players: number) {
//         super(nome)
//         this.players = players;
//     }
// }

// function searchProduct(search: string) {
//     if (search === 'Evangelho')
//         return new Book('Biblia', 'Mateus, Marcos, Lucas e João')
//     if (search === 'PES')
//         return new Gamer('PES', 4);
//     return null;
// }

// const produto = searchProduct('Evangelho')

// if (produto instanceof Book)
//     console.log(produto.autor);
// if (produto instanceof Gamer) {
//     console.log(produto.nome);
//     console.log(produto.players);
// }

// if (produto instanceof Produto)
//     console.log(produto.nome);


// interface Moto {
//     nome: string
// }

// const honda: Moto = {
//     nome: 'Yamaha '
// }

// console.log(honda instanceof Carro);

// 12 -
// const links = document.querySelectorAll('.links');
// console.log(links instanceof NodeList);

// links.forEach((link) => {
//     if (link instanceof HTMLAnchorElement) {
//         console.log(link.href);
//     }else{
//         console.log(typeof link);
//     }
// })

// 13 -
// const btn = document.querySelector('button');

// function handleClick(event: MouseEvent) {
//     console.log(event.pageX);
// }

// btn?.addEventListener('click', handleClick);

// function handleScroll(e: Event) {
//     console.log(e);
// }

// window.addEventListener('scroll', handleScroll);

// function ativarMenu(e: Event) {
//     if(e instanceof MouseEvent){
//         console.log(e.pageX);
//     }
//     if(e instanceof TouchEvent){
//         // Para pegar o primeiro toque na tela
//         console.log(e.touches[0].pageX);
//     }
// }

// document.documentElement.addEventListener('mousedown', ativarMenu);
// document.documentElement.addEventListener('touchstart', ativarMenu);
// window.addEventListener('keydown', ativarMenu)

// const btn = document.querySelector('button');

// function handleClick(this: HTMLButtonElement ,e: MouseEvent) {
//     console.log(this);
// }

// btn?.addEventListener('click', handleClick)


// const btn = document.querySelector('button');

// function handleClick(e: MouseEvent) {
//     const element = e.currentTarget;
//     if (element instanceof HTMLElement)
//         console.log(element.innerHTML);
// }

// btn?.addEventListener('click', handleClick)

// function retorno<variavel>(a: variavel): variavel {
//     return a;
// }

// console.log(retorno("A Game"));

// 14 -
// const numer = [1, 2, 3, 4, 5, 6, 7];
// const frut = ['Banana', 'Maça', 'Uva', 'Goiaba', 'Abacaxi', 'Pinha'];

// function firstFive<T>(list: T[]): T[] {
//     return list.slice(0, 5);
// }

// console.log(firstFive(numer));
// console.log(firstFive(frut));


// function notNull<T>(arg: T){
//     if(arg !== null) return arg;
//     else return null;
// }

// notNull("Andre")?.toLocaleLowerCase();
// notNull(120)?.toFixed();

// function tipoData<T>(a: T): { dado: T; tipo: string } {
//     const result = {
//         dado: a,
//         tipo: typeof a,
//     };
//     console.log(result);

//     return result;
// }

// tipoData('Test').tipo

// 15
// function extractText<T extends HTMLElement>(el: T)  {
//     return {
//         texto: el.innerText,
//         el,
//     };
// }

// const link = document.querySelector("a");

// if (link) {
//     console.log(extractText(link).el);
// }

// function $<Tipo extends Element>(selector: string): Tipo | null {
//     return document.querySelector(selector);
// }

// const link = $<HTMLAnchorElement>('a')?.href;

const link = document.querySelector<HTMLAnchorElement>(".link");

console.log(link?.href);
