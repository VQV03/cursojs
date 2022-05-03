//1a) Some todos os numeros (reduce)
//1b) Retorne um array com os pares(filter)
//1c) Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//reduce(function(acumulador, valor, indice, array){codigo}, 0);
//1a)
/*const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(total);*/

//1b) 
/*const par = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(par)*/

//1c)
/*const numDobro = numeros.map((valor) => valor * 2);
console.log(numDobro);*/

//2 - Retorne a pessoa mais velha.
const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:75},
];

const oldest = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(oldest);
