//Funcoes imediatas/funcoes auto invocada/IIFE - Immediately invoked function expression
/*function qualquerCoisa() {
    console.log('Gerso')
}
qualquerCoisa(); //e uma funcao comum que toca no escopo global*/
(function () {
    const nome = "Vitor"
    console.log(nome)
    /*Essa e uma funcao imediata, forma de escrita (function (parametro){
        codigo
})(chamar a funcao imediatamente apos seu termino)*/
})(); //Por que a funcao imediata e boa? Pois posso ter como visto duas constantes com o mesmo nome sem conflito, ja que a minha funcao nao toca no escopo global, podendo inclusive ter mais funcoes dentro dela propria.
//##########################################################
const nome = 'Abubleble';

(function (idade, peso, altura) {
    const sobrenome = 'Queiroz'
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Vitor'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(19, 90, 1.80);

//(function(){
//    codigo               //Forma de escrita de uma IIFE
//})();