//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numDobro = numeros.map((valor) => valor * 2);
//console.log(numDobro)

//Para cada elemento:

const pessoas = [
    {nome: 'Luiz', idade:62},
    {nome: 'Maria', idade:23},
    {nome: 'Eduardo', idade:55},
    {nome: 'Leticia', idade:19},
    {nome: 'Rosana', idade:32},
    {nome: 'Wallace', idade:47},
];

//a) Retorne apenas uma string com o nome da pessoa.
//b) Retorne apenas uma string com a idade da pessoa.
//c) Remova apenas a chave nome do objeto.
//d) Adicione uma chave id a cada objeto.

//a)
/*const onlyName = pessoas.map(obj => obj.nome);
console.log(onlyName);*/

//b)
/*const onlyAge = pessoas.map(obj => obj.idade);
console.log(onlyAge);*/

//c)
/*const removedNome = pessoas.map((obj) => {
    delete obj.nome
    return obj
});
console.log(removedNome);*/

//d) 
const withID = pessoas.map((obj, indice) => {
    //Tomar cuidado ao trabalhar com valores por referencia, ja que se altera o array original
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000
    return obj
});
console.log(withID)
