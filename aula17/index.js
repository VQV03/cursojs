/* 
Primitivos (imutaveis): string, number, boolean, undefined, null, bigint e symbol
*/
//          0123
/*let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome); //Nao ira alterar o "L" para "R", pois o valor da variavel e imutavel

let a = 'A';
let b = a; // Copiando valor de a para b
console.log(a, b);

a = 'Outra coisa'; //b se mantem a mesma coisa
console.log(a, b);*/

/*
Valores por Referencia(Mutavel): array, object e function
*/

/*let c = [1, 2, 3];
let d = c;
let e = [...c] //Dessa forma eu irei COPIAR o valor de c, como se fosse um valor primitivo, sendo independente do valor de c, isso tambem funciona com objetos
console.log(c, d);

c.push(4); //Eu ter adicionado o valor 4 ao array c, afetou tambem o array d
console.log(c, d)

d.pop(); //E mesmo alterando somento d, isso tambem afetara c
console.log(c, d);

console.log(e)

//Ou seja os valores primitivos sao copiados quando utilizamos o sinal de atribuicao. Ja os valores por referencia sao passados por referencia quando utilizamos o sinal de atribuicao, ou seja eles somente apontam para um valor na memoria*/

const f = {
    nome:'Vitor',
    sobrenome:'Queiroz'
};
const g = {...f};

g.nome = 'Joao';
console.log(f);
console.log(g);

