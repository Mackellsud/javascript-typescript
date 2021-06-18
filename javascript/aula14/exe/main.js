let valorEntrada = Number(prompt('Digite um número: '));

let resEntrada = document.getElementById('numEntrada');
let valorRes = document.getElementById('resRaiz');

resEntrada.innerHTML += valorEntrada;
valorRes.innerHTML += `<p>Raiz quadrada: ${valorEntrada ** 0.5}</p>`;
valorRes.innerHTML += `<p>${valorEntrada} é um número inteiro: ${Number.isInteger(valorEntrada)}</p>`;
valorRes.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(valorEntrada)}</p>`;
valorRes.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(valorEntrada)}</p>`;
valorRes.innerHTML += `<p>Com duas casas decimais: ${valorEntrada.toFixed(2)}`;