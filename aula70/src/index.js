const gersin = 'gerson';

alert('Ola mundo!')

import {nome as nome2, sobrenome, idade, math, Pessoa} from './modulo1.js'; //ao usar 'nome as nome2' eu to renomeando a constante que vem do meu modulo1

//Caso eu queria importar todo o conteudo de um modulo eu utilizo:
//import * as 'nomeDoModulo' from 'localDoModulo'

const nome = 'Gersin'

const p1 = new Pessoa('Gerson', 'Arantes')

console.log(nome, nome2, sobrenome, idade);
console.log(math(6, 7));
console.log(p1)
