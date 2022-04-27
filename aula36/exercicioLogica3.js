/*Escreva uma funcao que recebe um numero e retorne o seguinte:
Numero e divisivel por 3 = Fizz
Numero e divisivel por 5 = Buzz
Numero e divisivel por 3 e 5 = FizzBuzz
Numero nao e divisivel por 3 e 5 = retorna o proprio numero
Checar se o numero e realmente um numero
Usar numeros de 0 a 100
*/
const min = 1;
const max = 100;

function random(min, max) {
    const xis = Math.random() * (max - min) + min;
    const randomNumber = Math.floor(xis);
    return randomNumber;
};

function matematica (randomNumber) {
    if (randomNumber % 3 === 0) {
        return "Fizz"
    } else if (randomNumber % 5 === 0) {
        return "Buzz"
    } else if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
        return "FizzBuzz"
    } else {
        return `O numero ${randomNumber} nao e divisivel por 3 e 5`
    }
};

const isNaN = Number.isNaN(random(min, max)) ? 'Nao e um numero' : 'E um numero';

console.log(`${matematica(random(min, max))}. ${isNaN}`);
