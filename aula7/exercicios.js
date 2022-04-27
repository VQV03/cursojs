const nome = 'Vitor';
const sobrenome = 'Queiroz Vicente';
let idade = 19
let peso = 80
const altura = 1.76
const imc = peso / (altura * altura)
const ano = new Date().getFullYear()
const anoNascimento = ano - idade
console.log(`${nome} ${sobrenome}, tem ${idade} anos, ${peso} kg, tem ${altura} de altura e seu IMC e de:${imc}, e nasceu em ${anoNascimento}`);