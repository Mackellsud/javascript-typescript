// IEE 754-2008 Padrão de casas decimais
let num1 = 0.7;
let num2 = 0.1;

/* num1 += num2;   // 0.8
num1 += num2;  // 0.9
num1 += num2;  // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5 */

// num1 = ((num1 * 100) + (num2 * 100)) / 100; formula para tratar arredondamento.

// num1 = parseFloat(num1.toFixed(2)); // Faz o arredondamento correto dos valores.
// num1 = Number(num1.toFixed(2)); Faz o arredondamento correto dos valores.

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); Converte temporáriamente para String.
// num1 = num1.toString(); // Converte o tipo Number para string definitivamente.
// console.log(num1.toString(2)); Converte imprimi o valor binário do Number.
// console.log(num1.toFixed(2)) // Faz o arredondamento do valor.
// console.log(Number.isInteger(num1)); Verifica se o valor é um inteiro literal.
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp)); Verifica se o valor é um NaN.
