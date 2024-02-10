# Aprendizado em TypeScript

1. No início do arquivo, adicione `//@ts-check` para que o TypeScript verifique o código JavaScript em arquivo `.js`.

2. O TypeScript ajuda a resolver o problema de DX, experience development, pois ao recomendar como será o retorno ou o tipo, fica mais fácil prever quais serão as funções.

3. Instalação e Configuração do TypeScript:

   - Para instalar globalmente o TypeScript, utilize o comando `npm i -g typescript`. Se estiver no Linux e der erro de permissão, basta usar o comando `sudo npm i -g typescript`. Para verificar a instalação, digite `tsc` no terminal. Se aparecerem os comandos do TypeScript, significa que a instalação foi bem-sucedida.

   - Para compilar um arquivo `.ts` para JavaScript, utilize o seguinte comando: `tsc script.ts`. Isso criará um novo arquivo `script.js`. Para compilar automaticamente sempre que houver uma alteração, use os comandos `tsc` e `tsc -w` no terminal.

   - Para criar um arquivo de configuração do TypeScript, utilize o seguinte comando: `tsc --init`.

4. Anotações e Inferência de Tipos:

   - Com o TypeScript, pode-se indicar qual será o tipo de dado de uma variável através de anotações, `: tipo`, `: string`. A inferência de tipos permite que o TypeScript deduza o tipo de dado de expressões em JS. Sempre que ele conseguir inferir, não é necessário fazer a notação do dado.

5. Tipos Primitivos do TypeScript:

   - Os tipos primitivos ou básicos do TypeScript são `string`, `number` e `boolean`. O `typeof` é um operador de JS que retorna uma string indicando o tipo de dado. Os possíveis valores retornados por `typeof` são: `string`, `number`, `boolean`, `function`, `object`, `undefined`, `bigint` e `symbol`. O `typeof` funciona como um type guard.

     ```typescript
     const frase = 'A Frase';
     console.log(typeof frase); // resposta: string
     ```

6. Union Types:

   - Union Types é comum em funções que podem retornar ou receber tipos diferentes. Para isso, utiliza-se a barra vertical `string | number | boolean`.

     ```typescript
     let numero: string | number = 500;
     numero = '300';
     console.log(numero); // resposta: 300
     ```

7. Definição de Formas de Objetos:

   - Em TypeScript, é possível definir a forma (shape) de um objeto usando uma sintaxe parecida com a de criação de objetos `{}`.

     ```typescript
     function dados(dados: {
         nome: string;
         preco: number;
     }) {
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

8. Alias e Interfaces:

   - A palavra-chave `type` cria um atalho (alias) para um tipo customizado.

     ```typescript
     type Dados = {
         nome: string;
         preco: number;
     };

     function dados(dados: Dados) {
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

   - `interface` funciona na maioria dos casos da mesma forma que `type`, porém possui uma sintaxe diferente. As interfaces são geralmente utilizadas para definirmos objetos.

     ```typescript
     interface Dados {
         nome: string;
         preco: number;
     }

     function dados(dados: Dados) {
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

9. Tipagem de Arrays:

   - Um array é definido com o tipo de dado(s) que ele possui, seguido por `[]`.

     ```typescript
     const n = [1, 2, 3, 4];

     function maiorQue(data: number[]) {
         return data.filter((n) => n > 10);
     }
     ```

   - Existe uma sintaxe alternativa, onde é usado `Array<type>`. Sendo `type` o tipo de dado dentro do array.

     ```typescript
     const n = [1, 2, 3, 4];

     function maiorQue(data: Array<number>) {
         return data.filter((n) => n > 10);
     }
     ```

10. TypeScript com Classes:

    - As classes do TypeScript são uma forma de criar objetos que possuem tanto dados quanto métodos.

      ```typescript
      class Produto {
          constructor(
              public nome: string,
              public preco: number,
              public desconto: number = 0,
          ) {}

          resumo(): string {
              return `${this.nome} custa R$${(this.preco - this.desconto).toFixed(2)} (${this.desconto * 100}% off)`;
          }
      }

      const p1 = new Produto('TV', 1200);
      console.log(p1.resumo()); // resposta: TV custa R$1200.00 (0% off)

      const p2 = new Produto('Geladeira', 4500, 0.1);
      console.log(p2.resumo()); // resposta: Geladeira custa R$4050.00 (10% off)
      ```

11. Modificadores de Acesso:

    - Em TypeScript, há três modificadores de acesso: `public`, `private` e `protected`.

      - `public`: A propriedade ou método pode ser acessado de fora da classe.
      - `private`: A propriedade ou método só pode ser acessado de dentro da classe.
      - `protected`: A propriedade ou método só pode ser acessado de dentro da classe e de suas subclasses.

      ```typescript
      class Carro {
          private velocidadeAtual: number = 0;

          constructor(
              public marca: string,
              public modelo: string,
              private velocidadeMaxima: number = 220,
          ) {}

          private alterarVelocidade(delta: number): number {
              const novaVelocidade = this.velocidadeAtual + delta;

              if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
                  this.velocidadeAtual = novaVelocidade;
              } else {
                  this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
              }

              return this.velocidadeAtual;
          }

          acelerar(): number {
              return this.alterarVelocidade(5);
          }

          frear(): number {
              return this.alterarVelocidade(-5);
          }
      }

      const c1 = new Carro('Chevrolet', 'Onix', 250);
      console.log(c1.acelerar()); // resposta: 5
      console.log(c1.frear()); // resposta: 0
      ```

12. Módulos do TypeScript:

    - Os módulos do TypeScript permitem organizar o código em arquivos diferentes. Para importar e exportar módulos, utiliza-se `export` e `import`.

      ```typescript
      // arquivo: moduloA.ts
      export const a = 1;
      export function exibirA(): void {
          console.log(a);
      }

      // arquivo: moduloB.ts
      import { a, exibirA } from './moduloA';
      console.log(a); // resposta: 1
      exibirA(); // resposta: 1
      ```

13. Generics:

    - Generics permitem criar componentes que podem trabalhar com diversos tipos de dados, mantendo a integridade da informação.

      ```typescript
      function echo<T>(objeto: T): T {
          return objeto;
      }

      console.log(echo('Alex')); // resposta: Alex
      console.log(echo<number>(27)); // resposta: 27
      console.log(echo({ nome: 'Alex', idade: 27 })); // resposta: { nome: 'Alex', idade: 27 }
      ```

14. Decorators:

    - Decorators são uma forma de adicionar metadados a classes, métodos, acessores e propriedades.

      ```typescript
      function logarClasse(construtor: Function): void {
          console.log(construtor);
      }

      @logarClasse
      class Eletrodomestico {
          constructor() {
              console.log('Novo...');
          }
      }

      // resposta: [Function: Eletrodomestico]
      // Novo...
      ```

15. Inicializadores de Propriedade:

    - Inicializadores de propriedade permitem atribuir valores padrão às propriedades diretamente na declaração da classe.

      ```typescript
      class Pessoa {
          constructor(public nome: string = '', public sobrenome: string = '') {}
      }

      const pessoa1 = new Pessoa();
      console.log(pessoa1); // resposta: Pessoa { nome: '', sobrenome: '' }

      const pessoa2 = new Pessoa('John', 'Doe');
      console.log(pessoa2); // resposta: Pessoa { nome: 'John', sobrenome: 'Doe' }
      ```

16. Expressões opcionais (Optional Chaining):

    - O operador de encadeamento opcional (`?.`) permite acessar propriedades de objetos aninhados mesmo se uma expressão intermediária for `null` ou `undefined`.

      ```typescript
      const usuario = {
          id: 1,
          endereco: {
              rua: 'Rua 1',
              cidade: 'Cidade A',
              estado: 'Estado X',
          },
      };

      console.log(usuario.endereco?.cidade); // resposta: Cidade A
      console.log(usuario.endereco?.bairro?.nome); // resposta: undefined
      ```

17. Coalescência nula (Nullish Coalescing):

    - O operador de coalescência nula (`??`) é usado para fornecer um valor padrão para variáveis que podem ser `null` ou `undefined`.

      ```typescript
      const valorPadrao = 100;
      const valorUsuario = null;

      const valorFinal = valorUsuario ?? valorPadrao;

      console.log(valorFinal); // resposta: 100
      ```

18. Ambiente de Desenvolvimento:

    - Ambiente de desenvolvimento é fundamental para um desenvolvedor. Ferramentas como Visual Studio Code, ESLint, Prettier, Git e GitHub são essenciais.

      - **Visual Studio Code**: Um editor de código altamente configurável construído pela Microsoft.
      - **ESLint**: Uma ferramenta de análise de código estática para identificar padrões problemáticos no código JavaScript.
      - **Prettier**: Um formatador de código opionado.
      - **Git e GitHub**: Ferramentas de controle de versão e hospedagem de repositórios, respectivamente.

      - Configurações básicas do ESLint:

        ```json
        {
            "extends": "eslint:recommended",
            "env": {
                "browser": true,
                "node": true
            },
            "rules": {
                "no-console": "off"
            }
        }
        ```

      - Configurações básicas do Prettier:

        ```json
        {
            "semi": true,
            "singleQuote": true,
            "printWidth": 80
        }
        ```
