let umaString = 'Pensamos na criação e desenvolvimento';

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' Two Day', ' Three Day'));

console.log(umaString.indexOf('ri', 4)); // Busca o indície onde inicia a string
console.log(umaString.lastIndexOf('e', 4)); // Do começa do fim para o começo
console.log(umaString.match(/[a-z]/g)); // Expressão regulares
console.log(umaString.search(/x/)); // Similar ao indexOf porém aceita expressõe.s regulares
console.log(umaString.replace(/criação/, 'desenvolvimento')); // Altera o resultado da string 
console.log(umaString.replace(/a/g, '#'));
console.log(umaString.length);

console.log(umaString.slice(4, 12)); // Pega o caractere a partir dos indicies informado
console.log(umaString.slice(-5)); // Retorna o valor da subtração do total da string - o valor passado

console.log(umaString.split(' ')); // Fatia a string de acordo com os espaços
console.log(umaString.split('a')); // Fatia a string exceto o caractere informado
console.log(umaString.split(' ', 2)); // Fatia a string de acordo com o valor passado

console.log(umaString.toUpperCase()); // Converte tudo para maiúsculas
console.log(umaString.toLowerCase()); // Converte tudo para minúsculas
