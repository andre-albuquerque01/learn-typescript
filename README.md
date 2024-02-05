# Aprendizado em TypeScript

1 - No início do arquivo, adicione `//@ts-check` para que o TypeScript verifique o código JavaScript em arquivo `.js`.

2 - O TypeScript ajuda a resolver o problema de DX, experience development, pois ao recomendar como será o retorno ou o tipo, fica mais fácil prever quais serão as funções.

3 - Para instalar globalmente o TypeScript, utilize o comando `npm i -g typescript`. Se estiver no Linux e der erro de permissão, basta usar o comando `sudo npm i -g typescript`. Para verificar a instalação, digite `tsc` no terminal. Se aparecerem os comandos do TypeScript, significa que a instalação foi bem-sucedida.

3.1 - Para compilar um arquivo `.ts` para JavaScript, utilize o seguinte comando: `tsc script.ts`. Isso criará um novo arquivo `script.js`. Para compilar automaticamente sempre que houver uma alteração, use os comandos `tsc` e `tsc -w` no terminal.

3.2 - Para criar um arquivo de configuração do TypeScript, utilize o seguinte comando: `tsc --init`.

4 - Annotation, anotação, com o TypeScript pode-se indicar qual será o tipo de dado de uma variável através de anotações, `: tipo`, `: string`. Inference, o TypeScript consegue inferir o tipo de dado de expressões em JS. Sempre que ele conseguir inferir, não é necessário fazer a notação do dado.

5 - Tipos primitivos ou básicos do TypeScript: string, number e boolean. O `typeof` é um operador de JS que retorna uma string indicando o tipo de dado. Os possíveis valores retornados por `typeof` são: string; number; boolean; function; object; undefined; bigint e symbol. O `typeof` funciona como um type guard.

```typescript
const frase = 'A Frase'
console.log(typeof frase);
// resposta: string
```
