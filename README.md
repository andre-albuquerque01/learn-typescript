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
const btn = document.querySelector('.btn');
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
const btn = document.querySelector('.btn');
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
