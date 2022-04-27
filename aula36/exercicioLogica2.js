/* 
Escreva uma funcao chamada ePaisagem que recebe dois argumentos:Altura e Largura, de uma imagem(number) e retorne "true" se a imagem estiver no modo paisagem
Paisagem = largura > altura
*/

const largura = 480;
const altura = 300;

function ePaisagem (largura, altura) {
    if (largura > altura) {
        return true
    } else {
        return false
    }
}

console.log(ePaisagem(largura, altura));

/* Resolucao do Professor:
const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1080, 1920));
*/