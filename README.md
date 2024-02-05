# learn-typescript

1 - No início do arquivo, adicione `//@ts-check` para que o TypeScript verifique o código JavaScript em arquivo `.js`.
2 - O typescript ajuda a resolver o problema de DX, experience development, pois ao recomendar como será o retorno ou o tipo, fica mais fácil para prever quais serão as funções.
3 - Para instalar globalmente o typescript, `npm i -g typescript`, se estiver no linux e dar erro de permissão, só dar o comando `sudo npm i -g typescript`. Para ver se instalou, coloca no terminal tsc, se aparecer os comando do typscript, mostra que funcionou. 
3.1 - Para compilar um arquivo `.ts` para javascript, dar o seguinte comando: `tsc script.ts`, de forma que ele cria um novo arquivo `script.js`. Assim, para fazer de forma que ts para js, apenas dar o comando no terminal `tsc` e `tsc -w` para sempre compilar quando fazer a alteração, de forma automatica.
3.2 - Para criar um arquivo de configuração do typescript, o seguinte comando: `tsc --init`.