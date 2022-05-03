/* 
Javascript e baseado em prototipos para passar a prioridade e metodos de um objeto para outro.

Definicao de prototipo
Prototipo e o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo/molde para futuras producoes.

TODOS os objetos tem uma referencia interna para um prototipo (_proto_) que vem da propriedade prototype da funcao construtora que foi usada para cria-lo.
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos e usada ate o topo (null) ate encontrar (ou nao) tal membro.

MDN: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/Object_prototypes

W3: https://www.w3schools.com/js/js_object_prototypes.asp
*/

//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1._proto_

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

//Instancia
const pessoa1 = new Pessoa('Vitor', 'O.'); // <- Pessoa = Funcao construtora
const pessoa2 = new Pessoa('Julia', 'A.'); // <- Pessoa = Funcao construtora
const data = new Date(); // Data = Funcao construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);