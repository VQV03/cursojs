//Escreva uma funcao que recebe 2 numeros e retorne o maior deles
const min = 1;
const max = 99;

function random(min, max) {
    const xis = Math.random() * (max - min) + min;
    const x = Math.floor(xis);
    return x;
}
function random2(min, max) {
    const yis = Math.random() * (max - min) + min;
    const y = Math.floor(yis);
    return y;
}

function maximo(x, y) {
    console.log(x);
    console.log(y);
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(maximo(random(min, max), random2(min, max)));