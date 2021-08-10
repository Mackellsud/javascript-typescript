/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

Referência (mutável) - Arrays, Object, Function

0123
let b = 'SPFC';
b[0] = 'AVT';
console.log(b[0], b);

let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b)

a.push(5)
console.log(a, b)

b.pop();
console.log(a, b)

console.log(c)
*/
         

const pessoa = {
    nome: 'Usuario',
    lastname: 'Testing'
};

const c = {...pessoa}

c.nome = 'José';
c.lastname = 'Oxente';

console.log(c);
console.log(pessoa);