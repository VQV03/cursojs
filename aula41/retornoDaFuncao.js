//return
//Retorna um valor
//Termina a funcao
/*function soma(a, b) {
    return a + b;
};

function soma2(a, b) {
    console.log(a + b);
}*/

/*document.addEventListener('click', function (){
    document.body.style.backgroundColor = 'red'
});*/

/*function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};  
};*/

/*const p1 = criaPessoa('Vitor', 'Queiroz');
const p2 = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

console.log(p1);
console.log(p2);
console.log(typeof p1);
console.log(typeof p2);*/

/*function falaFrase(comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Ola');

console.log(olaMundo('mundo!'));*/
//#############################
/*function duplica(n) {
    return n * 2
}

function triplica(n) {
    return n * 3
}

function quadriplica(n) {
    return n * 4
}

console.log(duplica(2), triplica(2), quadriplica(2))*/
//As funcoes acima tambem podem ser escritas da seguinte forma :
function criaMultiplacador(multiplicador) {
    // multiplicador
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplacador(2)
const triplica = criaMultiplacador(3)
const quadriplica = criaMultiplacador(4)

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
