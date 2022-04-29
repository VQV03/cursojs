//Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico. Ou seja e a habilidade que a funcao tem de acessar seu escopo lexico
//O escopo léxico é baseado nas variáveis e blocos de escopo definidos, por você, em tempo de escrita do código. Logo, ele é definido em tempo de compilação

function retornaFuncao() {
    const nome = 'Vitor'
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Vitor');
const funcao2 = retornaFuncao('Vitor');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());
//##################################################
//Modulos
function ModuloMatematico() {     
    var x = 0;     //E uma variavel persistente devido ao closures, ou seja o valor dela sera alterado conforme utilizarmos mas nao sera reiniciado
    function somaUm() {
        x++;        
        console.log(x);     
    }                     
    //As funcoes estao buscando a variavel x na funcao pai
    function subtraiUm() {         
        x--;
        console.log(x);     
    }
    return {         
        somaUm: somaUm,         
        subtraiUm: subtraiUm     //A funcao moduloMatematico retorna um objeto com referencia as suas funcoes filho
    }; 
}
var teste = ModuloMatematico();  
teste.somaUm();     // 1 
teste.somaUm();     // 2
teste.somaUm();     // 3
teste.subtraiUm();  // 2