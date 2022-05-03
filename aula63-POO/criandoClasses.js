//classe e igual a uma funcao construtora, so que escrita de maneira diferente.

class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar () {
        console.log(`${this.nome} ${this.sobrenome} esta falando.`)
    }

    comer () {
        console.log(`${this.nome} ${this.sobrenome} esta comendo.`)
    }

    beber () {
        console.log(`${this.nome} ${this.sobrenome} esta bebendo.`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} ${this.sobrenome} esta falando.`)
}

const p1 = new Pessoa('Vitor', 'Queiroz')
const p2 = new Pessoa('Julia', 'Queiroz') 
const p3 = new Pessoa('Gerson', 'Arantes') 
const p4 = new Pessoa('Piririco', 'Pao duro')  
//Estou instanciando a pessoa, ou seja usando a classe como molde para criar a pessoa
console.log(p1)