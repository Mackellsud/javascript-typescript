const nome = 'Michael';
const sobrenome = 'Santos';
const idade = 35;
const peso = 80;
const alturaEmM = 1.70;
let imc = peso / (alturaEmM ** 2)
let anoNascimento = 2021 - idade

console.log(`${nome + ' ' + sobrenome} tem ${idade} anos, pesa ${peso}kg
            tem ${alturaEmM.toFixed(2)}m e seu IMC é de ${imc.toFixed(2)}
            ${nome + ' ' + sobrenome} nasceu em ${anoNascimento}`)