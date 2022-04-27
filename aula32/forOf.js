/* 
For classico -> Geralmente com iteraveis (arrays e strings)
For in -> retorna o indice ou chave (string, array e objetos)
For of -> retorna o valor em si (iteraveis: arrays ou strings)
*/ 

/*const nome = ['Vitor', 'Queiroz', 'Vicente'];*/

/*for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
};*/

//console.log('#####');

/*for ( let i in nome) {
    console.log(nome[i]);
};*/

//console.log('#####');

/*for (let valor of nome) {
    console.log(valor)
}*/

//console.log('#####');

/*nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});*/

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Queiroz'
};

for (let i in pessoa) {
    console.log(i, pessoa[i])
}