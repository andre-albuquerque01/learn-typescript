# Aprendizado em TypeScript

1 - No início do arquivo, adicione `//@ts-check` para que o TypeScript verifique o código JavaScript em arquivo `.js`.

2 - O TypeScript ajuda a resolver o problema de DX, experience development, pois ao recomendar como será o retorno ou o tipo, fica mais fácil prever quais serão as funções.

3

3.1 - Para instalar globalmente o TypeScript, utilize o comando `npm i -g typescript`. Se estiver no Linux e der erro de permissão, basta usar o comando `sudo npm i -g typescript`. Para verificar a instalação, digite `tsc` no terminal. Se aparecerem os comandos do TypeScript, significa que a instalação foi bem-sucedida.

3.2 - Para compilar um arquivo `.ts` para JavaScript, utilize o seguinte comando: `tsc script.ts`. Isso criará um novo arquivo `script.js`. Para compilar automaticamente sempre que houver uma alteração, use os comandos `tsc` e `tsc -w` no terminal.

3.3 - Para criar um arquivo de configuração do TypeScript, utilize o seguinte comando: `tsc --init`.

4 - Annotation, anotação, com o TypeScript pode-se indicar qual será o tipo de dado de uma variável através de anotações, `: tipo`, `: string`. Inference, o TypeScript consegue inferir o tipo de dado de expressões em JS. Sempre que ele conseguir inferir, não é necessário fazer a notação do dado.

5 - Tipos primitivos ou básicos do TypeScript: string, number e boolean. O `typeof` é um operador de JS que retorna uma string indicando o tipo de dado. Os possíveis valores retornados por `typeof` são: string; number; boolean; function; object; undefined; bigint e symbol. O `typeof` funciona como um type guard.

```typescript
const frase = 'A Frase'
console.log(typeof frase);
// resposta: string
```

6

6.1 - Union Types, é comum ter funções que podem retornar ou receber tipo diferentes. Para isso se utiliza a barra vertical `string | number | boolean`.  

```typescript
let numero: string | number = 500;
numero = '300'
console.log(numero);
// resposta: 300
```

6.2 - Funções que selecionam elementos do DOM geralmente retornam null como uma possibilidade de tipo, pois o TypeScript não tem acesso prévio ao DOM para saber se o elemento existem ou não.

```typescript
// Retorna HTMLButtonElement
const btn = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/ undefined
btn?.click();
```

7

7.1 - Object, é possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos : {}

```typescript
function dados(dados: {
    nome: string;
    preco: number;
}){
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <p>${dados.preco}</p>
    </div>
    `;
}

dados({
    nome: 'Car',
    preco: 25500,
});
```

7.2 - A palavra chave `type` cria um atalho (alias) para um tipo customizado.

```typescript
type Dados = {
    nome: string;
    preco: number;
};

function dados(dados: Dados){
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <p>${dados.preco}</p>
    </div>
    `;
}

dados({
    nome: 'Car',
    preco: 25500,
});
```

7.3 - `interface` funciona na maioria dos casos da mesma forma que type, porém possui uma sintaxe diferente. As interfaces são geralmente utilizadas para definirmos objetos.

```typescript
interface Dados {
    nome: string;
    preco: number;
}

function dados(dados: Dados){
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <p>${dados.preco}</p>
    </div>
    `;
}

dados({
    nome: 'Car',
    preco: 25500,
});
```

8

8.1 - Um array é definido com o tipo de dado(s) que ele possui, seguido por []

```typescript
const n = [1, 2, 3, 4];

function maiorQue(data: number[]){
    return data.filter((n) => n > 10);
}
```

8.2 - Existe uma sintaxe alternativa, onde é usado `Array<type>`. Sendo type o tipo de dado dentro do array.

```typescript
const n = [1, 2, 3, 4];

function maiorQue(data: Array<number>){
    return data.filter((n) => n > 10);
}
```

9 - O `any` indica que o dado pode conter qualquer tipo de dado do typescript. Se deve evitar o máximo o uso do `any`, pois o mesmo remove todas as seguranças e conveniências que o TS fornece. Porém, em alguns casos o `any` faz sentido, como no caso da função `json()` onde qualquer tipo de dados pode ser retornado, dependendo da API que acessamos.

10

10.1 - `null` é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

```typescript
const btn = document.querySelector('button');
if(btn !==){
    btn.click();
}
if(btn){
    btn.click();
}
if(btn) btn.click(){
    btn?.click();
}
console.log(typeof null);
```

10.2 Pode definir propriedades opcionais utilizando `opcional?: string`. Quando opcional elas poderão sempre retornar como o valor definido ou undefined.

```typescript
interface Product {
    category?: string;
}

const book: Product = {};
const game: Product = {
    category: 'Action'
};

game.category?.toLowerCase();
livro.category?.toLowerCase();

```

11

11.1 - Em javascript Classe `class` são funções construtoras que geram objetos. Quando define uma classe, o typescript gera a interface do objeto produzido pela mesma.

```typescript
class Produto {
    nome: string;
    tamanho: number;

    constructor(nome: string, tamanho: number) {
        this.nome = nome;
        this.tamanho = tamanho;
    }

    realName() {
        return `O nome verdadeiro é ${this.nome}`;
     }
}

const book = new Produto('Brasil melhor', 15);

console.log(book.nome);
console.log(book.tamanho);
console.log(book.realName());
```

11.2 - Existem funções que retornam diferentes tipos de objetos. Com a palavra chave `instanceof` podemos verificar se um objeto é uma instância (foi constuída ou herda) de uma função construtora (class).

```typescript
class Produto {
    nome: string;
    tamanho: number;

    constructor(nome: string, tamanho: number) {
        this.nome = nome;
        this.tamanho = tamanho;
    }

    realName() {
        return `O nome verdadeiro é ${this.nome}`;
     }
}

const book = new Produto('Brasil melhor', 15);


console.log(book instanceof Produto);
// true
```

Tamém pode fazer da seguinte maneira:

```typescript
class Book {
    autor: string;

    constructor(autor: string) {
        this.autor = autor
    }
}

class Gamer {
    players: number;

    constructor(players: number) {
        this.players = players;
    }
}

function searchProduct(search: string) {
    if (search === 'Evangelho')
        return new Book('Mateus, Marcos, Lucas e João')
    if (search === 'PES')
        return new Gamer(4);
    return null;
}

const produto = searchProduct('Evangelho')

// Dar erro ao tentar acessar sem se for instacia de console.log(produto.autor);

// Ao fazer essa verificação, permite que acesse a instacia da class
if (produto instanceof Book)
    console.log(produto.autor);
if (produto instanceof Gamer)
    console.log(produto.players);

```

11.3 - O `instanceof` verifica se a função construtora herda de outra (extends). O `instanceof` é um operador que existe no Javascript. Se definir a interface de um objeto apenas com a `interface` e não possuir uma classe construtora do mesmo, não será possível utilizar o `instanceof` na interface.

```typescript
class Produto {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Book extends Produto {
    autor: string;

    constructor(nome: string, autor: string) {
        super(nome)
        this.autor = autor
    }
}

class Gamer extends Produto {
    players: number;

    constructor(nome: string, players: number) {
        super(nome)
        this.players = players;
    }
}

function searchProduct(search: string) {
    if (search === 'Evangelho')
        return new Book('Biblia', 'Mateus, Marcos, Lucas e João')
    if (search === 'PES')
        return new Gamer('PES', 4);
    return null;
}

const produto = searchProduct('Evangelho')

if (produto instanceof Book)
    console.log(produto.autor);
if (produto instanceof Gamer) {
    console.log(produto.nome);
    console.log(produto.players);
}

if (produto instanceof Produto)
    console.log(produto.nome );

```

```typescript
interface Moto {
    nome: string
}

const honda: Moto = {
    nome: 'Yamaha '
}

console.log(honda instanceof Moto);
// Moto is not defined, erro pois está utilizando função do JS em TS.
```

12 - querySelector

12.1 - Quando selecionamos um elemento do DOM com o `querySelector`, o objeto retornado dependerá da string que passarmos no método.

```typescript
document.querySelector('video'); // HTMLVideoElement
document.querySelector('img'); // HTMLImageElement

const link1 = document.querySelector('a'); // HTMLAnchorElement
const link2 = document.querySelector('#ancora'); // Element

link1?.href;
link2?.href; // erro no ts
```

12.2 - O `querySelectorAll` retorna uma NodeList de elemento. Não confundir o nome da interface `NodeListOf` com o nome da classe `NodeList`.

```typescript
const links = document.querySelectorAll('.links');

links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }else{
        console.log(typeof link);
    }
})
```

13 - Callback

13.1 - Passa o evento como uma string e uma função de callback no método `addEventListener`. A função de callback possui um parâmetro que faz referência ao evento executado.

```typescript
const btn = document.querySelector('button');

function handleClick(e: MouseEvent) {
    console.log(e.pageX);
}

btn?.addEventListener('click', handleClick);

function handleScroll(e: Event) {
    console.log(e);
}

window.addEventListener('scroll', handleScroll);
```

13.2 - Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas `Event`.

```typescript
function ativarMenu(e: Event) {
    if(e instanceof MouseEvent){
        console.log(e.pageX);
    }
    if(e instanceof TouchEvent){
        // Para pegar o primeiro toque na tela
        console.log(e.touches[0].pageX);
    }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu)
```

 13.3 - Dentro de uma função, o `this` faz referência ao objeto que executou a mesma. No Javascript o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.

```typescript
const btn = document.querySelector('button');

function handleClick(this: HTMLButtonElement ,e: MouseEvent) {
    console.log(this);
}

btn?.addEventListener('click', handleClick)
```

13.4 - O typescript não executa o javascript, assim ele não consegue assumir qual será o `target` ou `currentTarget` do evento executado. Os elementos são definidos como o tipo `EventTarget`, pois esse é o tipo mais comum entre os elementos que podem receber um evento.

```typescript
const btn = document.querySelector('button');

function handleClick(e: MouseEvent) {
    const element = e.currentTarget;
    if (element instanceof HTMLElement)
        console.log(element.innerHTML);
}

btn?.addEventListener('click', handleClick)
```

14 - Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de `<Tipo>`.

```typescript
const numer = [1, 2, 3, 4, 5, 6, 7];
const frut = ['Banana', 'Maça', 'Uva', 'Goiaba', 'Abacaxi', 'Pinha'];
  
function firstFive<T>(list: T[]): T[] {
    return list.slice(0, 5);
}

console.log(firstFive(numer));
console.log(firstFive(frut));
```

15 - Tipos

15.1 - É possível indicar que o tipo genérico deve herdar de uma interface específica com o `extends`.

```typescript
function extractText<T extends HTMLElement>(el: T)  {
    return {
        texto: el.innerText,
        el,
    };
}

const link = document.querySelector("a");

if (link) {
    console.log(extractText(link).el);
}
```

Ou também pode definir direto no estancia.

```typescript
function $<Tipo extends Element>(selector: string): Tipo | null {
    return document.querySelector(selector);
}

const link = $<HTMLAnchorElement>('a')?.href;
```

15.2 - Métodos nativos são definidos utlizando generics, assim podemos indicar durante a execução qual será o tipo esperado.

```typescript
function $<Tipo extends Element>(selector: string): Tipo | null {
    return document.querySelector(selector);
}

const link = $<HTMLAnchorElement>('a')?.href;
```

16 - Tipos de retorno

16.1 - A interface de um função é definida durante a sua declaração

```typescript
function somar(n1: number, n2: number, n3?: number): number {
    return n1 + n2 + (n3 ? n3 : 0);
}

somar(3, 4, 5);

const subtrair = (n1: number, n2: number): number => n1 - n2;

subtrair(4, 10);
```

16.2 - No Js, uma função sem return irá retornar `undefined`. No Ts o retorno é definido como `void`. Isso evita usos errados como checagens booleanas de métodos que não possuem retorno.

```typescript
type Callback = (e: MouseEvent) => void;

function pintarTela(cor: string): void {
    document.body.style.background = cor
}

console.log(pintarTela('black'));
```

16.3 - O `never` é utilizado em casos onde a função gera um erro ou termina a aplicação.

```typescript
function abort(msg: string): never {
    throw new Error(msg);
}
abort('Ocorreu um erro')
// Não irá apresentar o console.log, pois apresentara o erro e vai travar.
console.log('Tente novamente');
```

16.4 - Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possível retorno.

```typescript
interface Quadrado {
    lado: number;
    perimetro(lado: number): number
}

function calcular(forma: Quadrado) {
    forma.perimetro(3);
}
```

16.5 - Existem funções que retornam diferentes dados dependendo do argumento. Pode declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome. O Overload deve ser compatível com a função original.

```typescript
function normalizar(valor: string[]): string[] (+1 overload)

function normalizar(valor: string): string; 
function normalizar(valor: string[]): string[]; 
function normalizar(valor: string | string[]): string | string[] {
    if (typeof valor === 'string')
        return valor.trim().toLocaleLowerCase();
    else return valor.map(item => item.trim().toLocaleLowerCase());
}

const valor = normalizar(' Produt  ').toUpperCase()
const valor1 = normalizar(['Santos', 'São Paulo', 'Palmeiras']).length
console.log(valor);
console.log(valor1);
```

17 - Guard, Safety e Narrowing

17.1 - O Type Guard (defesa) garanye a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento). O Ts faz o Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.

```typescript
function typeGuard(value: any) {
    if (typeof value === 'string')
        return value.toLowerCase();

    if (typeof value === 'number')
        return value.toFixed();

    if (value instanceof HTMLElement)
        return value.innerText;
}
typeGuard(200);
typeGuard('3330');
typeGuard(document.body);
```

17.2 - O operador `in` verifica se o objeto possui uma propriedade com o mesmo nome da string comparada `"propriedade" in obj`.

```typescript
const obj = {
    nome: 'Objeto'
}

if ('nome' in obj) console.log(`tem o nome sim e o nome é: ${obj.nome}`);

interface Produto {
    nome: string;
    preco: number;
}

function handleProducto(data: Produto) {
    if ('preco' in data) {
        document.body.innerHTML += `
        <p>Nome: ${data.nome}</p>
        <p>Preço: R$ ${data.preco}</p>
        `
    }
}

handleProducto({nome: 'Casa', preco: 550});
```

18 - Unknown

18.1 - Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando o Type Safety estiver garantida.

```typescript
function typeGuard(value: unknown) {
    if (typeof value === 'string')
        return value.toLowerCase();

    if (typeof value === 'number')
        return value.toFixed();

    if (value instanceof HTMLElement)
        return value.innerText;
}
console.log(typeGuard(200));
console.log(typeGuard('3330'));
console.log(typeGuard(document.body));
```

19 - Array, Type Predicate

19.1 - Um array não pode ser verificada com o `typeof` pois a mesma é um `object`. Podemos verificar se o dado é `instanceof Array` ou podemos usar a função `Array.isArray()`.

```typescript
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
    if (data instanceof Array) {
        console.log('É instâcia de Array');
    }

    if (Array.isArray(data)) {
        console.log('É Array');
    }
}
```

19.2 - Ts não executa Js. Sabe-se já que o TS não executa o Js durante a checagem dos tipos. Se isso ocorre, então como a função `isArray` consege ser usada com Type Guard? Com o Type Predicate `:arg is type`, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.

```typescript
function isString(value: unknown) : value is string {
    return typeof value === 'string';
}

function handleData(data: unknown) {
    if (isString(data)) {
        return data.toLowerCase();
    }

}
```

20 - Objetos

20.1 - O Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.

```typescript
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProcut(json);
}
fetchProduct();

interface Produto {
    nome: string;
    preco: number;
}

function isProduto(value: unknown): value is Produto {
    if (value && typeof value === 'object' && "nome" in value && "preco" in value) {
        return true;
    }
    return false;
}

function handleProcut(data: unknown) {
    if (isProduto(data)) {
        if (typeof data.nome === 'string')
            console.log(data.nome);
    }
}
```

21 - As

21.1 - Com o Type Assertion é possível "indicar" ao Ts qual o tipo de dado esperado com a palavra-chave `as`. Só é possível indicar tipo que possuam relação com o tipo original. Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quano indicamos algo que nem sempre será verdade.

```typescript
const video = document.querySelector('.player') as HTMLVideoElement;
// erro runtime, não existe volume de null
video.volume;

// erro TS, possíveis dados devem ser compatíveis com Element | null
const link = document.querySelector('.link') as string;
```

21.2 - Podemos user o Type Assertion para definir que um tipo `any` é qualquer tipo de dado possível.

```typescript
interface Produto {
    nome: string;
    preco: number;
}

async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais
async function handleProduto() {
    const produto = await fetchProduct();
    produto.nome
}

handleProduto()
```

21.3 - Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza. Esse é um operador de TS `!.` e não de JS como o `?.`. Durante a compilação ele será removido.

```typescript
const video = document.querySelector('video')!;
// erro runtime, não existe volume de null
video.volume;

// erro runtime
document.querySelector('a')!.href = "https://www.google.com"

const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector(".player");
const video3 = document.querySelector<HTMLVideoElement>(".player");
const video4 = document.querySelector(".player");
(video4 as HTMLVideoElement).volume
```
