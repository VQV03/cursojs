/*
&& -> false && true (Retornara false "o valor mesmo")
|| -> true || false -> vai retornar  "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null/undefined
NaN
*/ 

//console.log('Luiz Otavio' && 'Maria')

/*function sayHi () {
    return 'Hi';
}

const gonnaExecut = false

console.log(gonnaExecut && sayHi());*/

//console.log(0 || false || null || 'Luiz Otavio' || true);

/*const userColor = 'red';
const standardColor = userColor || 'black';

console.log(standardColor);*/

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //Sera exibido a const c pois o false esta em uma string sendo um valor true