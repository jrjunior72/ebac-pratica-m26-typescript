// função de cumprimento

function cumprimento(nome:string):string {
    console.log(`Olá ${nome}`);
}

cumprimento('Ricardo');

// função de cumprimento com arrow function
console.log("// Função de cumprimento usando arrow function.");

const cumprimento2 = (nome:string):string => `Olá ${nome}`;

console.log(cumprimento2('Ricardo'));



