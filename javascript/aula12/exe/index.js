const nome = prompt('Digite seu nome: ')
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? </strong>${nome.search(/a/)}</strong> <br />`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br />`;
document.body.style.background = '#eee';
document.body.style.color = 'black';



/* res = document.getElementById('resultado')
res.innerHTML = `Bem vindo(a) ${nomeUsuario}!` */

/* const nomeUsuario = prompt('Digite seu nome: ');
let valorMinimoInvestimento = prompt('Digite o valor da banca R$ ');
let valorPadraoBanca = prompt('Digite o investimento da banca R$ ');

valorMinimoInvestimento = Number(valorMinimoInvestimento);
valorPadraoBanca = Number(valorPadraoBanca);
let soma = valorMinimoInvestimento + valorPadraoBanca;

let resUsuario = document.getElementById('resultado');
let resInvestimento = document.getElementById('soma');

if ( valorMinimoInvestimento < 30 && valorPadraoBanca < 100) {
    res = document.getElementById('resultado')
    res.innerHTML = `Olá, ${nomeUsuario.toLocaleUpperCase()}! o valor mínimo para
    aposta é de R$ 30,00.`  
}
if (valorPadraoBanca < 100) {
    res = document.getElementById('resultado')
    res.innerHTML = `Olá, ${nomeUsuario.toUpperCase()}! o valor mínimo da banca
    é de R$ 100,00.` 
} else {
    res = document.getElementById('resultado')
    res.innerHTML = `Bem vindo(a), ${nomeUsuario.toUpperCase()}! você está iniciando sua
    jornada no World Trader com uma banca de R$ ${soma}.` 

    soma = document.getElementById('soma')
    res.innerHTML = ``
} */