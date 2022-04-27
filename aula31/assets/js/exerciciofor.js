const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2 
    {tag: 'section', texto: 'Frase 4'}, // 3
];
// querySelector id = '#id', class = '.class'
const container = document.querySelector('.container')
//const div = document.createElement('div')

//Para selecionar a const dentro do for, eu devo digitar constName[i].tag para as tags html, constName[i].texto para o texto a ser inserido.
for (let i = 0; i <= elementos.length; i++) {
    container.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;
}
