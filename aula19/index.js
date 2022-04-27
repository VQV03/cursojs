/*
Operadores de comparacao
> Maior que
>= Maior que ou igual a 
< Menor que 
<= Menor que ou igual a
= Atribuicao
== Igualdade (valor) ***NAO USAR***, pois e "errado"
=== Igualdade estrita (valor e tipo)
!= Diferente (valor) ***NAO USAR***, pois e "errado"
!== Diferente estrito (valor e tipo)
*/
const num1 = 10; //Number
const num2 = 11; //Number
const comp = num1 > num2;
console.log(comp); // Essa funcao me retornara um valor bolean, ou seja, false or true


const num3 = '10'; //String
const compl = num1 == num3;
const compli = num1 === num3;
console.log(compl); // Dara true pois == so verifica o valor
console.log(compli); // Dara false pois === verifica tambem tipo, e por num 1 ser um number e num3 ser uma string n sera igual

const dif = num1 != num3; 
const dife = num1 !== num3; 
console.log(dif); // Dara false pois != so verifica o valor
console.log(dife); // Dara true pois !== verifica tambem tipo, e por num 1 ser um number e num3 ser uma string n sera igual