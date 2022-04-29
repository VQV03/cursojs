//Factory functios e funcoes construtoras sao muito similares, a unica diferenca e q uma factory function para a funcao construtora e que a funcao fabrica e uma funcao normal que retorna um objeto voluntariamente, ja a funcao construtora ela cria e retorna o objeto automaticamente
//Na funcao construtora tem que mudar a convencao de como se escreve a funcao, iniciando-a sempre com letra maiuscula (ex: Pessoa(new))

function Pessoa(nome, sobrenome) {
    //Atributos/metodos privados
    const ID = 123456;

    const methodIntern = () => {
        const ID = Pessoa.ID
        console.log('ID')
    };

    //Atributos/metodos publicos
    this.nome = nome; //Pessoa.nome = nome
    this.sobrenome = sobrenome; //Pessoa.nome = sobrenome

    this.method = () => {
        console.log(this.nome + " " +this.sobrenome + ": sou um metodo");
    };
};
//A palavra new cria um novo objeto vazio, faz o this apontar para o objeto apontado e dai ela retorna implicitamente o objeto para a variavel, nao necessitando do return
//NAO PODEMOS ESQUECER A PALAVRA NEW ANTES DE CHAMAR A FUNCAO COMO ABAIXO:
const p1 = new Pessoa('Vitor', 'Queiroz');
const p2 = new Pessoa('Gerson', 'Arantes');
const p3 = new Pessoa('Ricardo', 'Schuster');
const p4 = new Pessoa('Leonan', 'Lodula');

p1.method();
p2.method();
p3.method();
p4.method();