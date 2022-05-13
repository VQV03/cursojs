const nome = 'Vitor';
const sobrenome = 'Queiroz';
const idade = 19;

function soma (x, y) {
    return x + y; 
};

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export {nome, sobrenome, idade, soma as math} 
//e eu posso exportar uma variavel com outro nome tambem, usando "as", por exemplo posso exportar a funcao soma como math: soma as math
//Posso exportar automaticamente uma funcao/variavel/classe colocando export antes da mesma, por exemplo: export nome = 'Vitor';