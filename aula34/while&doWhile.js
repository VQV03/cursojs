/*let controle = 0;

while (i <= 10) {
console.log(i);
i++ //Obrigatorio usar para nao criar um laco infinito
}*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1
const max = 50
let rand = random(min, max);
//console.log(rand);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}
console.log('#####')
// a unica diferenca entre while e do while, e que o while checa a condicao e depois executa o codigo, ja o do while ele executa o codigo primeiro e depois checa a condicao

/*do {
    rand = random(min, max);
    console.log(rand)
} while (rand !== 10);*/