const verdadeira = true;
//A maior diferenca entre var e let e o escopo
//Let tem escopo de bloco {... bloco}
//Var so tem escopo de funcao 

/*let nome = 'Luiz'; //Criando
var nome2 = 'Luiz';
if (verdadeira) {
    let nome = 'Otavio'; //Criando, essa let e diferente da que esta fora da chave
    var nome2 = 'Rogerio'   

    if (verdadeira) {
        let nome = 'Ronaldo' //Caso eu comente a let nome dentro desse bloco, ela n sera encontrada e consequentemente teria um undefined
        let nome2 = 'Otavio' //Redeclarando
        console.log(nome, nome2);
    }

    console.log(nome, nome2);
}

console.log(nome, nome2); //Enquanto a let n puxara uma variavel redeclarada dentro de uma funcao, a var ira puxar
//var nome2 = 'Otavio';*/



/*function falaOi () {
    if (verdadeira) {
    var nome = 'Luiz';
    var sobrenome = 'Miranda' ;
    }
    console.log(sobrenome);
}

//console.log(`Oi ${nome}`);
falaOi();*/

console.log(sobrenome);

let sobrenome = 'Miranda'