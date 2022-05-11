//Babel: https://babeljs.io/
//Can I Use: https://caniuse.com/
//Criar o package.json: npm init -y
//Instalar o Babel: npm install @babel/cli @babel/preset-env @babel/core
//Criar o bundle.js (arquivo com js antigo): npx babel main.js -o bundle.js --presets=@babel/env

const nome = 'Vitor'; 
const obj = {nome}; 
const novoObj = {...obj}; 
console.log(novoObj);

//Comando no JSON para recompilar o codigo toda vez q salvarmos: "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
//Executar o codigo acima: npm run babel
//Parar a execucao do codigo: ctrl + c

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}