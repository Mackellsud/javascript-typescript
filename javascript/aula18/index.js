/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valor

Referência (mutável) - Arrays, Object, Function
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b)

a.push(5)
console.log(a, b)

b.pop();
console.log(a, b)