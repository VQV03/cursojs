// Nao podemos criar constantes com palavras reservadas da linguagem, ou seja palavras usadas pelo javascript, ex: if, let, const.
// Constantes precisam ter nomes significativos, ou seja, nomes que tem valor/signifcado no seu codigo.
// Nao podemos comecar o nome de uma constante com um numero, ex:1nome.
// o nome da constante nao pode conter espacos ou tracos, ex: nome cliente, nome-cliente. Para nomes compostos se utiliza camelCase, ex: nomeCompletoDoCliente.
// As constantes sao case-sensitive, ou seja, nomecliente e nomeCliente serao diferentes.
// Nao pode modificar o valor de uma constante.
// Nao utilize var, utilize let.

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 15;
const conta1 = primeiroNumero * segundoNumero;
const conta2 = primeiroNumero * terceiroNumero;
const conta3 = segundoNumero * terceiroNumero;
console.log(conta1);
console.log(conta2);
console.log(conta3);
const duplicado = conta1 * 2;
console.log(duplicado);


console.log(typeof(primeiroNumero));

// ECMAScript e uma padronizacao da linguagem javascript criada pela ecma international, e a sua versao ECMAScript 2015 (ES6) e a utilizada atualmente, onde a funcao let por exemplo foi introduzida.