//            0123456789012
const nome = 'Vitor Queiroz';
//                 0       1        2        3
const alunos = ['Luiz', 'Vitor', 'Jorge', 'Gerson'];
console.log(alunos);
console.log(alunos[3]);

/*alunos[0] = 'Eduardo'
console.log(alunos[0])

alunos[4] = 'Luiza'
console.log(alunos) */ //Altera os elementos do array

/*console.log(alunos.length)

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Luana';
alunos[alunos.length] = 'Julia';
console.log(alunos.length)*/ //Adiciona novos elementos no fim do array

/*alunos.push('Otavio');
alunos.push('Luiza');
alunos.push('Fabio');
console.log(alunos);*/ //Adiciona novos elementos no fim do array

/*alunos.unshift('Luiza');
alunos.unshift('Fabio');
console.log(alunos)*/ //Adiciona no comeco

/*alunos.pop();
console.log(alunos);*/ //Elimina o ultimo elemento do array
/*const removido = alunos.pop(); 
console.log(removido);*/ //Mostra quem foi removido do array

/*alunos.shift();
const removidos = alunos.shift(); 
console.log(removidos);*/ //Elimina o primeiro elemento do array

/*delete alunos[1];*/ //Elimina um elemento do array porem sem alterar os indices, ou seja o indice 1 ficara undefined

alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, 3)); //Sempre colocar 1 a mais do elemento que voce quer, ou seja, aparecera nesse exemplo do 0 ao 2, pois o 3 nao e incluido
console.log(alunos.slice(0, -2)); //Terei uma slice do array que ira excluir os dois ultimos elementos
//No JavaScript objeto = array

console.log(alunos instanceof Array); //Me retornara se a variavel e o nao um array