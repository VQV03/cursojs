//Tipos de dados primitivos String, number, bolean, undefined, null e symbol

const nome = 'Vitor' //string
const nome1 = "Vitor" //string
const nome2 = `Vitor` //string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined = nao aponta para local nenhum na memoria, indefinido
let sobrenomeAluno = null; // nulo = nao aponta para local nenhum na memoria
const aprovado = true; // Boolean = true ou false (valor logico)

let a = [1, 2];
let b = a

console.log(a, b);
// [1, 2] [1, 2]

b.push(3);
console.log(a, b);
// [1, 2, 3] [1, 2, 3]

a = 2;
b = a;
console.log(a, b);
// 2, 2

a = 3;
console.log(a, b);
// 3, 2
