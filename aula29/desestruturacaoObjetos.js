//Essencialmente a mesma coisa que a atribuicao via desestruturacao de array

const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Queiroz',
    idade: 19,
    endereco: {
        rua: 'Av. Gerson',
        numero: '257'
    }
};
//Atribuicao via desestruturacao:
/*const { nome: teste ='O nome nao existe', sobrenome: teste2 ='O sobrenome nao existe' } = pessoa;

console.log(teste, teste2);*/

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);