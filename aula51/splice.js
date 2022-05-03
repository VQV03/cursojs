//                0        1         2          3         4
//               -5       -4        -3         -2        -1
const nomes = ['Maria', 'Vitor', 'Eduardo', 'Gerson', 'Ricardo'];

// nomes.splice(in, del, el1, el2, el3);
//in = Indice que vou comecar a mexer
//del = quantos elementos quero remover
//el1, el2, el3, ... = elementos para adicionar ao array

//Simular a funcao pop();
/*nomes.splice(4, 1); //A funcao splice tambem retorna o elemento removido, mas o elemento e retornado como array, ja que podemos remover mais de um elemento
console.log(nomes)*/ //[ 'Maria', 'Vitor', 'Eduardo', 'Gerson' ]

//Simular shift
/*const removidos = nome.splice(0, 1);
console.log(nomes, removidos)*/

//Simular push
/*nomes.splice(nomes.length, 0, 'Luiz')
console.log(nomes)*/

//Simular unshift
/*nomes.splice(0, 0, 'Luiz', 'Arantes', 'Matheus')
console.log(nomes)*/

//Como obter os elementos removidos pela slice();
/*const removidos = nomes.splice(4, 1);
console.log(removidos);*/