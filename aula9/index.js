/* Operadores aritmeticos: 
+ Adicao e Concatenacao (unir duas strings)
- Subtracao
/ Divisao
* Multiplicacao
** Potenciacao/Elevar
% Resto da divisao
() Cria prioridade na conta
*/ 

const num1 = 5;
const num2 = 10;
const num3 = 7
console.log(num1 * num2 + ((num3 + num2 - num1) ** 2))

let contador = 1;
contador++; // virou 2
contador++; // virou 3
contador--; // retornou a 2
console.log(contador);

const num4 = 9;
const num5 = 'Gerson';
console.log(num4 * num5);
// NaN - Not a Number

const num6 = 9;
const num7 = parseInt('5');
const num8 = parseFloat('5.5');
const num9 = Number("4");
console.log(num6 + num7);
console.log(typeof num7);
console.log(num6 + num8);
console.log(typeof num8);
console.log(num6 + num9);
console.log(typeof num9);
// a funcao parseInt transformara a string em um numero inteiro. A funcao parseFloat transformara a string em um numero flutuante, ou seja com numeros decimais. E a funcao Number tranformara a string em um numero tbm.
