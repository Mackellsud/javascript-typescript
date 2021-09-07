// Array Básico
const alunos = ['Néfi', 'Nara', 'Eu'];

console.log(alunos);

/*

Verifica se o objeto é uma instância de array
console.log(alunos instanceof Array);

Buscando elementos no array
console.log(alunos.slice(0, 3));

Deleta um elemento sem alterar o índice
delete alunos[1];

Removendo elemento e guardando o valor em uma váriavel, dessa forma podemos
identificar qual foi o primeiro elemento removido em "caso de relatório".
const firstRemove = alunos.shift('');
console.log(firstRemove);

Remove elementos da primeira posição do array
alunos.shift();

Removendo elemento e guardando o valor em uma váriavel, dessa forma podemos
identificar qual foi o último elemento removido em "caso de relatório".
const remove = alunos.pop();
console.log(remove);

Remove elementos da última posição do array
alunos.pop('Eu');

Adiciona elementos ao ínicio do array [não recomendado]
alunos.unshift('Patricia');

Adiciona elemento ao fim do array [boa prática]
alunos.push('Novo elemento');

Exibe o tamanho do array
console.log(alunos.length);

Maneira simples de adicionar elementos ao array
alunos[alunos.length] = 'João';
alunos[alunos.length] = 'Maria';
alunos[alunos.length] = 'Jose';

Altera elementos do array
alunos[2] = 'Patricia';
alunos[3] = 'Eu';

Exibe elementos do array
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

*/