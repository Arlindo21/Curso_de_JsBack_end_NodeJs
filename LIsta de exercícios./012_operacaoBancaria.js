//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
const saldoDaConta=3000;
let valorDoDeposito=parseInt("5000");
let saque=parseInt("1500");

const operacao=saldoDaConta+valorDoDeposito-saque
console.log(`O saldo da sua conta é ${saldoDaConta} \n Valor depositado ${valorDoDeposito} \n Fez se um saque de ${saque}\n o Seu saldo atual é de ${operacao}`);