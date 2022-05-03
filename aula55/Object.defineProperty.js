//defineProperty = defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable:true, //Mostra a chave
        value: estoque, //valor
        writable: false, //Pode alterar (true) ou nao (false) o valor
        configurable: true, //Ela pode ser reconfigurada?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true, //Mostra a chave
            value: nome, //valor
            writable: true, //Pode alterar (true) ou nao (false) o valor
            configurable: true, //Ela pode ser reconfigurada?
        },
        preco: {
            enumerable:true, //Mostra a chave
            value: preco, //valor
            writable: true, //Pode alterar (true) ou nao (false) o valor
            configurable: true, //Ela pode ser reconfigurada?
        },
    });
};

const p1 = new Produto('Camiseta', 30, 4);
console.log(p1)
console.log(Object.keys(p1));
//Delete funciona mesmo com writable: false

for (let chave in p1) {
    console.log(chave);
}