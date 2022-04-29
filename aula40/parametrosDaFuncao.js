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
/*function objeto ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Vitor', sobrenome: 'Queiroz', idade: 19};
objeto(obj);*/

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
    for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

makeMath('*', 1, 20, 30, 40, 50);

//Nao existe arguments em arrow function, eu terei que fazer const conta = (...args) => {console.log(args);}
// conta('+', 1, 20, 30, 40, 50)
