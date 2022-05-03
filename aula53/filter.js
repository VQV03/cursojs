//Filter, map e reduce (Funcoes mais importantes para o array)
//Filter - Ela filtra o meu array sem alterar o meu array original, criando um novo array com os valores filtrados

//Retorne apenas os numeros maiores que 10
/*const numeros = [5, 50, 80, 1, 2, 3, 6, 8, 7, 11, 15, 22, 27];

const filtered =numeros.filter((valor, indice, array) => {
    return valor > 10
});
console.log(filtered);*/

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas que o nome termina com "a"

const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
]

//Retorne as pessoas que tem o nome com 5 letras ou mais
const bigName = pessoas.filter(obj =>  obj.nome.length >= 5);
console.log(bigName)

//Retorne as pessoas com mais de 50 anos
const olderFifty = pessoas.filter(obj => obj.idade > 50);
console.log(olderFifty)

//Retorne as pessoas que o nome termina com "a"
const finishedInA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(finishedInA);