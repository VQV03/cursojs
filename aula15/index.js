//Funcao classica:
/*function saudacao (nome) {
//console.log(`Bom dia ${nome}!`)
return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
//saudacao('Maria')
console.log(variavel)

function soma(x = 1, y = 1) {
    const resultado = x + y
    return resultado // A funcao so sera lida ate o return, apos isso a funcao meio que "ignora"
}
console.log(soma())
console.log (soma(2, 2));
console.log (soma(4, 10));
console.log (soma(5, 15));*/
//console.log(resultado) //Dara undefined, pois a funcao resultado esta protegida pelo escopo da funcao, ou seja nao pode ser acessada fora da funcao

// Funcao anonima:
/*const raiz = function(n) {
return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));*/

//Arrow function
const raiz = (n) => /*(O simbolo => representa uma funcao, tambem sendo chamado de arrow function)*/ {
    return n ** 0.5
} //caso eu so tenha um parametro eu posso eliminar os parenteses, e caso so tenha uma linha dentro da funcao eu posso eliminar os parenteses
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

