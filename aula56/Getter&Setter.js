//defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, //Mostra a chave
        //value: estoque, //valor
        //writable: false, //Pode alterar (true) ou nao (false) o valor
        configurable: true, //Ela pode ser reconfigurada?
        get: () => {
            return estoquePrivado;
        },
        set: valor => {
            if (typeof valor !== 'number') {
                throw new TypeError('Error NaN');
            };
            estoquePrivado = valor;
        },
    });
};

function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome = valor
        }
    };
};

/*const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 54;
console.log(p1.estoque);*/

const p2 = criaProduto('Camiseta');
console.log(p2);