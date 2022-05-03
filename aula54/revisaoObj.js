/*const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Queiroz'
};
const chave = 'nome' //Nao consigo mais acessar por notacao de ponto (pessoa.nome), somente por colchetes (pessoa[chave])
console.log(pessoa[chave]);*/

//ConstrutorParaArray = new Array, tambem existe para objeto
/*const pessoa1 = new Object();
pessoa1.nome = 'Vitor';
pessoa1.sobrenome = 'Queiroz';
pessoa1.idade = 19

pessoa1.sayHi = () => console.log(`${pessoa1.nome} ${pessoa1.sobrenome} esta dizendo oi.`)

pessoa1.sayHi();

pessoa1.getBirthYear = () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - pessoa1.idade;
}

console.log(pessoa1.getBirthYear());

for (let chave in pessoa1) {
    console.log(chave);
}

//delete pessoa1.nome; //Posso remover algum atributo do objeto com delete nomeDoObjeto.objeto
//console.log(pessoa1)*/

//Factory function  / Constructor function / classe
//Factory
/*function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
    };
};

const p1 = criaPessoa('Vitor', 'Queiroz');
console.log(p1.nomeCompleto)*/
//Constructor
// Oq new faz -> {Criar um objeto vazio} <- atrela a palavra "this" -> a funcao retorna o this
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Vitor', 'Queiroz');
//Posso usar Object.freeze para impedir que um objeto seja alterado, como por exemplo maria foi para gerson. Isso tambem funciona com arrays.
Object.freeze(p1)
const p2 = new Pessoa('Maria', 'Arantes');
console.log(p1);

p2.nome = 'Gerson'
//p2 = (enderecoMemoria) -> 'Valor'
//p2.enderecoMemoria = {nome: 'Outro nome'}
//p2 = ('Outro nome')
console.log(p2)
