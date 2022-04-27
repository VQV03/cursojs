//Declaracao de funcao (function hoisting)
function falaOi () {
    console.log('Oie')
}
falaOi();

//As funcoes sao First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua funcao abaixo:')
    funcao();
};
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou um arrow function')
}
funcaoArrow();

/*setInterval(function() {

}, 1000);

setInterval(afuncao(), 1000)*/

//Dentro de um objeto
const objeto = {
    falar: function () {
        console.log('Estou falando...')
    }
};

objeto.falar();