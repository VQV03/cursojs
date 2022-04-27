/*let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [B, C, A]

[a, b, c] = letras; 

console.log(a, b , c);*/

//indice           0     1    2     3     4     5      6    7      8
/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros 
//... rest, ... spread
const [um, ,tres, ,cinco, ,sete, ...restoio] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero); 
console.log(resto);
console.log(um,tres,cinco,sete);
console.log(restoio);*/

const numeros = [
    //  0
//   0  1  2
    [1, 2, 3],
    //  1
//   0  1  2
    [4, 5, 6],
    //  2
//   0  1  2
    [7, 8, 9]
];

//console.log(numeros[1][2]); //Estou buscando dentro do array de incide 1 o valor com indice 2
//const [, [, ,seis]] = numeros; //Para obter o numero 6

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);