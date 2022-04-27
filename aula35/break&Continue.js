const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) { //Mesma coisa em for classico, for in e for of.

    if (numero === 2) {
        continue;
    }
    console.log(numero);

    if (numero === 7) {
        break;
    }

}