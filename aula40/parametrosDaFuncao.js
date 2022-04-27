/*function argument() {
    console.log(arguments[10])
}

argument('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);*/

/*function funcao (a, b = 2, c = 4) {*/
    /*let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total)*/

    /*b = b || 0;
    console.log(a + b + c)
}

funcao(2, 10);*/

//A unica maneira de pular um valor como por exemplo b, e colocando seu valor com undefined, por exemplo console.log(2, undefined, 10)
//################################################
function objeto ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Vitor', sobrenome: 'Queiroz', idade: 19};
objeto(obj);

/* 
Outra modo
function objeto ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

objeto (['Vitor Queiroz', 'Vicente', 19]);
*/
//#################################################
//... = rest operator
function makeMath(operador, acumulador, ...numeros) {
    for() {}
    console.log(operador, acumulador, numeros);
}

makeMath('+', 0, 20, 30, 40, 50);