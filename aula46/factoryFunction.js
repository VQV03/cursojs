//Factory function sao funcoes que retornam objetos
//Exemplo de factory function
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        //Setter
        set nomeCompleto (valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto = 'programaçãoS') {
            return `${this.nome} ${sobrenome} esta falando sobre ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        //Getter
        get imc () { //ao colocar get, a function imc passa a fingir ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Vitor', 'Queiroz', 1.8, 90);
const p2 = criaPessoa('Gerson', 'Arantes', 2, 180)
/*console.log(p2.fala('JS'));
//console.log(p1.imc(), p2.imc()) //Ira dar erro devido ao get antes da funcao imc
console.log(p1.imc, p2.imc)*/ //Assim ira funcionar ja que a engine ve imc como um atributo
p1.nomeCompleto = 'Vitor Queiroz Vicente';
console.log(p1.nomeCompleto);