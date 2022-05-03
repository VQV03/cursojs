//a)Retorne a soma do dobro de todos os pares, com filter, map e reduce juntos.
//b) Filtrar os pares.
//c) Dobrar os valores.
//d) Reduzir(somar tudo).

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//b)
const pares = numeros.filter(valor => valor % 2 === 0);
console.log(pares); //[ 50, 80, 2, 8, 22 ]

//c)
const dobro = pares.map(valor => valor * 2);
console.log(dobro); //[ 100, 160, 4, 16, 44 ]

//d)
const reduce = dobro.reduce((acumulador, valor) => acumulador + valor);
console.log(reduce); //324

//a)
const a = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador + valor);
console.log(a);