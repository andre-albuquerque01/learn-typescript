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

// const link = document.querySelector<HTMLAnchorElement>(".link");

// console.log(link?.href);

// 16
// function somar(n1: number, n2: number, n3?: number): number {
//     return n1 + n2 + (n3 ? n3 : 0);
// }

// somar(3, 4, 5);

// const subtrair = (n1: number, n2: number): number => n1 - n2;

// subtrair(4, 10);

// type Callback = (e: MouseEvent) => void;

// function pintarTela(cor: string): void {
//     document.body.style.background = cor
// }

// console.log(pintarTela('black'));

// function abort(msg: string): never {
//     throw new Error(msg);
// }
// abort('Ocorreu um erro')
// console.log('Tente novamente');

// interface Quadrado {
//     lado: number;
//     perimetro(lado: number): number
// }

// function calcular(forma: Quadrado) {
//     forma.perimetro(3);
// }

// function normalizar(valor: string): string;
// function normalizar(valor: string[]): string[];
// function normalizar(valor: string | string[]): string | string[] {
//     if (typeof valor === 'string')
//         return valor.trim().toLocaleLowerCase();
//     else return valor.map(item => item.trim().toLocaleLowerCase());
// }

// const valor = normalizar(' Produt  ').toUpperCase()
// const valor1 = normalizar(['Santos', 'São Paulo', 'Palmeiras']).length
// console.log(valor);
// console.log(valor1);


// 17
// function typeGuard(value: any) {
//     if (typeof value === 'string')
//         return value.toLowerCase();

//     if (typeof value === 'number')
//         return value.toFixed();

//     if (value instanceof HTMLElement)
//         return value.innerText;
// }
// typeGuard(200);
// typeGuard('3330');
// typeGuard(document.body);

// const obj = {
//     nome: 'Objeto'
// }

// if ('nome' in obj) console.log(`tem o nome sim e o nome é: ${obj.nome}`);

// interface Produto {
//     nome: string;
//     preco: number;
// }

// function handleProducto(data: Produto) {
//     if ('preco' in data) {
//         document.body.innerHTML += `
//         <p>Nome: ${data.nome}</p>
//         <p>Preço: R$ ${data.preco}</p>
//         `
//     }
// }

// handleProducto({nome: 'Casa', preco: 550});

// 18

// function typeGuard(value: unknown) {
//     if (typeof value === 'string')
//         return value.toLowerCase();

//     if (typeof value === 'number')
//         return value.toFixed();

//     if (value instanceof HTMLElement)
//         return value.innerText;
// }
// console.log(typeGuard(200));
// console.log(typeGuard('3330'));
// console.log(typeGuard(document.body));

// 19
// async function fetchCursos() {
//     const response = await fetch('https://api.origamid.dev/json/cursos.json');
//     const json = await response.json();
//     handleCursos(json);
// }
// fetchCursos();

// function handleCursos(data: unknown) {
//     if (data instanceof Array) {
//         console.log('É instâcia de Array');
//     }

//     if (Array.isArray(data)) {
//         console.log('É Array');
//     }
// }

// function isString(value: unknown) : value is string {
//     return typeof value === 'string';
// }

// function handleData(data: unknown) {
//     if (isString(data)) {
//         return data.toLowerCase();
//     }

// }

// 20

// async function fetchProduct() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json();
//     handleProcut(json);
// }
// fetchProduct();

// interface Produto {
//     nome: string;
//     preco: number;
// }

// function isProduto(value: unknown): value is Produto {
//     if (value && typeof value === 'object' && "nome" in value && "preco" in value) {
//         return true;
//     }
//     return false;
// }

// function handleProcut(data: unknown) {
//     if (isProduto(data)) {
//         if (typeof data.nome === 'string')
//             console.log(data.nome);
//     }
// }

// 21
// const video = document.querySelector('.player') as HTMLVideoElement;
// // erro runtime, não existe volume de null
// video.volume;

// // erro TS, possíveis dados devem ser compatíveis com Element | null
// const link = document.querySelector('.link') as string;

// interface Produto {
//     nome: string;
//     preco: number;
// }

// async function fetchProduct() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     return response.json() as Promise<Produto>;
// }

// // Podemos usar o as em diferentes locais
// async function handleProduto() {
//     const produto = await fetchProduct();
//     produto.nome
// }

// handleProduto()

// const video = document.querySelector('video')!;
// erro runtime, não existe volume de null
// video.volume;

// erro runtime
// document.querySelector('a')!.href = "https://www.google.com"

// const video1 = document.querySelector('.player') as HTMLVideoElement;
// const video2 = <HTMLVideoElement>document.querySelector(".player");
// const video3 = document.querySelector<HTMLVideoElement>(".player");
// const video4 = document.querySelector(".player");
// (video4 as HTMLVideoElement).volume

// 22
// const { body }: { body: HTMLElement } = document;

// interface Produto {
//     nome: string;
//     preco?: number
// }

// function handleData({ nome, preco }: Produto) {
//     nome.includes('book');
//     preco?.toFixed();
// }

// handleData({
//     nome: "Notebook",
//     preco: 2110
// });

// function handleClick({ currentTarget, pageX }: { currentTarget: EventTarget | null; pageX: number }) {
//     if (currentTarget instanceof HTMLElement)
//         currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
//     console.log(pageX);
// }

// function handleClick1({ currentTarget, pageX }: MouseEvent) {
//     if (currentTarget instanceof HTMLElement)
//         currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
//     console.log(pageX);
// }

// document.documentElement.addEventListener('click', handleClick)
// document.documentElement.addEventListener('click', handleClick1)

// function comparar(tipo: "menor" | "maior", ...numero: number[]) {
//     if (tipo === 'menor')
//         return Math.min(...numero)
//     if (tipo === 'maior')
//         return Math.max(...numero)
// }

// comparar('menor', 1, 2, 3, 4, 5, 6, 7, 8, 9)

// type Produto = {
//     preco: number;
// };

// type Carro = {
//     rodas: number;
//     portas: number;
// };

// function handleProductoCarro(dados: Produto & Carro){
//     dados.rodas;
//     dados.portas;
//     dados.preco;
// }

// type TipoCarro = {
//     rodas: number;
//     portas: number;
// }

// type TipoCarroComPreco = TipoCarro & {
//     preco: number;
// }

// interface InterfaceCarro {
//     rodas: number;
//     portas: number;
// }

// interface InterfaceCarro {
//     preco: number;
// }

// function handleInterfaceCarro(carro: InterfaceCarro){}

// interface Window {
//     userId: number;
// }

// window.userId = 100;  

// 23

// class Produto {
//     // Não permite alteração dentro da classe mais
//     readonly tipo = 'produto';
//     // Para acessar em outras classes que extends essa, aí terá acesso.
//     protected nome: string;
//     // Só permite acessar dentro da classe esse objeto.
//     private preco: number | undefined;

//     constructor(nome: string, preco?: number) {
//         this.nome = nome;
//         this.preco = preco;
//     }

//     getPreco() {
//         if (typeof this.preco === 'number')
//             return Produto.transformarPreco(this.preco);
//     }

//     static transformarPreco(preco: number) {
//         return `R$ ${preco}`
//     }
// }

// const livro = new Produto('Teste da vida', 255);
// console.log(livro.getPreco());
// console.log(Produto.transformarPreco(15));


// const produto1 = ['PC', 5000];
// const produto2: [string, number] = ['PC', 12000];

// produto2[0].toLocaleLowerCase();
// produto2[1].toFixed();

// const [nome, preco] = produto2;
// console.log(nome);

// function getText(selector: string) {
//     const el = document.querySelector<HTMLElement>(selector);
//     if (el) return [el, el.innerText] as const;
//     else return null;
// }

// const btn = getText("button");