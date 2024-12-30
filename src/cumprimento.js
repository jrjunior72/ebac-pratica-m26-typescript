"use strict";
// função de cumprimento
function cumprimento(nome) {
    console.log(`Olá ${nome}`);
}
cumprimento('Ricardo');
// função de cumprimento com arrow function
console.log("// Função de cumprimento usando arrow function.");
const cumprimento2 = (nome) => `Olá ${nome}`;
console.log(cumprimento2('Ricardo'));
