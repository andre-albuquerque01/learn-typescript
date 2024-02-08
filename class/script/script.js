"use strict";
// const frase = 'Andre is better'
function mostrarTitulo(obj) {
    if (obj && typeof obj === 'object' && 'titulo' in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({ titulo: 'AAA' });
