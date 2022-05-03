//new Object -> Object.prototype
//Prototype e o pai de todos os objetos
/*const objA = {
    chaveA: "A",
    //_proto_: Object.prototype
};

const objB = {
    chaveB: "B",
    //_proto_: objA
};

const objC = new Object ();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveB)*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

//Funcao de desconto
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};


//Funcao de aumento
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//p1.desconto(50);

const p1 = new Produto('Camiseta', 50);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15,
}
Object.setPrototypeOf(p2, Produto.prototype)

p2.aumento(25);

console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 75,
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 460,
    },
});

p3.aumento(15);

console.log(p3);