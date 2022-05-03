//Map() -> MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

const pessoas = [
    {id: 3, nome: 'Vitor'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];

const novasPessoas = {};
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for (const pessoa of novasPessoas) {
    console.log(pessoa);
}

// for (const [identifier, {id, nome}] of novasPessoas) {
//     console.log(identifier, id, nome);
// }

novasPessoas.delete(2);
