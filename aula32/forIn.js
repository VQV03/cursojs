//For in = le os indice (array/vetor) ou chaves do objeto
//Array
/*const fruta = ['Pera', 'Maca', 'Uva'];

//for (let i = 0; i < fruta.length; i++) {
 //   console.log(fruta[i]);
//};

for (let i in fruta) {
    console.log(fruta[i]);
};*/

//Objeto
const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Queiroz',
    idade: 19
};

const chave = 'nome';

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}