/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)
*/

/*
Ja vimos:
Object.keys (retorna chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/ 
/* Object.assign
const produto = {nome: 'Copo', preco: 10, material: 'Vidro'};
//const caneca = {...produto, material: "Porcelana",}; //Forma 1
const caneca = Object.assign({}, produto, {material: 'Ceramica'}); //Forma 2 usando Object.assing

caneca.nome = 'Caneca';
caneca.preco = 18;
console.log(produto);
console.log(caneca);
*/
/*getOwnPropertyDescriptor
const produto = {nome: 'Mochila', preco: 70, material: 'Tecido'};
Object.defineProperty(produto, 'nome', {
    writable:false,
    configurable:false,
    value: 'Qualquer outra coisa',
})
const caneca = {nome: produto.nome, preco: produco.preco};
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
*/

/*console.log(Object.values(produto));
console.log(Object.entries(produto)); 
*/
const produto = {nome: 'Mochila', preco: 70, material: 'Tecido'};

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

/**/ 