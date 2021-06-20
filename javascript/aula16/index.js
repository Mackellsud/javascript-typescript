// Função básica

function saudacao() {
    //alert(`Olá, ${nome}! Seja bem vindo(a).`)
    let nameUser = prompt('Digite seu nome: ')
    let user = document.getElementById('userName')

    user.innerHTML = nameUser
}

saudacao();

function somaValores() {
    let cod1 = Number(prompt('Digite o primeiro número: '));
    let cod2 = Number(prompt('Digite o segundo número: '));
    let res = Math.cos(cod1) * cod2;
    let soma = document.querySelector('.secure')

    soma.innerHTML = `<strong>${res}</strong>`;
}

somaValores();

/**
 * Exemplo de função que soma dois valores
 * function soma(x, y) {
 *  const resultado x + y;
 *  return resultado
 * }
 * 
 * console.log(2, 2);
 * 
 * 
 * Exemplo de função retornando um valor (não recomendado), pois especificamos
 * que a função possa retornar um conjuntos de códigos como mostrado no próximo
 * exemplo.
 * 
 *  function saudacao(nome) {
 *  console.log(`Bom dia, ${nome}`);
 *  return abcdef;
 * }
 * 
 * const variavel = saudacao('nome1');
 * console.log(variavel);
 *
 * 
 * 
 * Exemplo de função passando parametros simples.
 * function saudacao(nome) {
 *  console.log(`Bom dia, ${nome}`);
 * }
 * 
 * saudacao('nome1');
 * saudacao('nome2');
 * saudacao('nome3');
 */

