"use strict";
// função de multiplicação
function multiplicacao(A, B) {
    return A * B;
}
const resultadoMultiplicacao = multiplicacao(20, 30);
console.log(`A x B = ${resultadoMultiplicacao}`);
//Arrow function tipada
console.log("// Função de multiplicação usando arrow function.");
const multiplicacao2 = (A, B) => A * B;
console.log(`A x B = ${multiplicacao2(20, 30)}`);
