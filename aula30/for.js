/*console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');*/

// i = index (comumente usado)
//O 'for' precisa de 3 requisitos para funcionar, criar uma variavel nos parenteses, criar uma condicao para parar o laco e incrementar/decrementar a variavel de controle
/*for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}*/ //Incrementando

/*for (let a = 500; a >= 400; a-= 10) {
    console.log(`Linha ${a}`);
}*/ //Decrementando

/*for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par)
}*/

//               0        1      2       3         4        5      6 
const fruta = ['Maca', 'Pera', 'Uva', 'Mamao', 'Banana', 'Kiwi', 'Caju'];

for (let i = 0; i < fruta.length; i++) {
    console.log(`Indice ${i}`,fruta[i]);  
}