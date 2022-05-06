class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar () {
        if(this.ligado) {
            console.log (`${this.nome} esta ligado.`);
            return;
        };

        this.ligado = true
    };

    desligar () {
        if(!this.ligado) {
            console.log(`${this.nome} esta desligado.`);
            return;
        };

        this.ligado = false
    };
};

class Smartphone extends DispositivoEletronico {
    constructor (nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    };
};

class Tablet extends DispositivoEletronico {
    constructor (nome, WiFi) {
        super(nome);
        this.WiFi = Sim;
    };

    falaOi() {
        console.log('Oi');
    };
};

const s1 = new Smartphone('IPhone', 'Azul marinho', '8 plus');
s1.ligar();
s1.ligar();
s1.desligar();
s1.desligar();
console.log(s1);

const t1 = new Tablet('IPad', true);
console.log(t1);