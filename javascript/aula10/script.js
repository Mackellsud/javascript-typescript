let numEntrada = Number(prompt('Digite um valor: '));
let numInvestimento = Number(prompt('Digite outro valor: '));
let somaResultado = numEntrada + numInvestimento;

if (numEntrada < 30) {
    alert('Valor mínimo de entrada é a partir de R$ 30,00')
} else if (numInvestimento < 100) {
    alert('Valor de investimento permitido é R$ 100,00')
} else {
    alert(`O valor total do investimento é de R$${somaResultado.toFixed(2)}`)
}
