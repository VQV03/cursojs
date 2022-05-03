//Funcoes geradoras podem quase "pausar" o codigo em determinado ponto, por exemplo entregando valor 1 na primera chamada, valor 2 na segunda, valor3 na terceira.

function* geradora1 () {
    //Codigo qualquer...
    yield 'Valor1';
    //Codigo qualquer
    yield 'Valor2';                            //Caso eu use um return eu impeco a execucao de tudo apos o return
    //Codigo qualquer
    yield 'Valor3';
};

function* geradora2 () {
    let i = 0;

    while(true) {                            //Caso eu use um return eu impeco a execucao de tudo apos o return
        yield i;
        i++;
    };
};

function* geradora3 () {
    yield 0;
    yield 1;                             //Caso eu use um return eu impeco a execucao de tudo apos o return
    yield 2;
};

function* geradora4 () {
    yield* geradora3();
    yield 3;
    yield 4;                          //Caso eu use um return eu impeco a execucao de tudo apos o return
    yield 5;
};

function* geradora5 () {
    yield function () {
        console.log('Vim do y1')
    }

    //...                                  //Caso eu use um return eu impeco a execucao de tudo apos o return

    yield function () {
        console.log('Vim do y2')
    }
}

const g1 = geradora1();

/*console.log(g1.next().value);  //Valor1 
console.log(g1.next().value);  //Valor2
console.log(g1.next().value); //Valor3*/ 
/*for(let valor of g1) {
    console.log(valor);
};*/

const g2 = geradora2();

/*console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);*/

const g4 = geradora4();
/*for(let valor of g4) {
    console.log(valor);
};*/

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();