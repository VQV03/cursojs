/* alert ('com nossa mensagem') // essa funcao me retornara um valor undefined
confirm ('Realmente deseja apagar esse post?') // essa funcao me retornara com um valor bolean, ou seja, true or false.
prompt ('Qual o seu nome?') // essa funcao me retornara uma string com o texto que o usuario utilizou. */ 

/* const confirmacao = confirm('Realmente deseja apagar esse post?');
console.log(confirmacao);

let num1 = prompt('Digite um numero')
num1 = parseFloat(num1); */

let num1 = prompt('Digite um numero')
let num2 = prompt('Digite outro numero')

num1 = Number(num1)
num2 = Number(num2)

const resultado = ((num1 + num2) * num2);
alert(`O resultado e: ${resultado}.`)
