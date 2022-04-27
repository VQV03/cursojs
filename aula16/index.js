/*const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array);

const nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = '25';
const nome02 = 'Vitor';
const sobrenome02 = 'Queiroz';
const idade02 = '19';*/

/* [] = array
{} = objeto*/

/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
const pessoa2 = {
    nome: 'Vitor',
    sobrenome: 'Queiroz',
    idade: 19
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);*/

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
};

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
const pessoa2 = criaPessoa('Vitor', 'Queiroz', 19)
const pessoa3 = criaPessoa('Joao','Guilherme', 45)
const pessoa4 = criaPessoa('Fabricio','Silva', 24)
const pessoa5 = criaPessoa('Maria','Gutierre', 21)

console.log(pessoa1.nome, pessoa2.idade)*/

const pessoa1 = {
    nome:'Luiz',
    sobrenome:'Miranda',
    idade: 25,

    fala () {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi... Minha idade atual e ${this.idade} anos.`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();