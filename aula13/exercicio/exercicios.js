/*const numero = prompt('Digite seu numero')
const numeronmr = parseFloat(numero)

window.document.body.innerHTML += `<h1>Seu numero e: ${numeronmr}</h1><br>`
window.document.body.innerHTML += `<p>A raiz quadrada do seu numero e: ${Math.pow(numeronmr, 0.5)}</p><br>`
window.document.body.innerHTML += `<p>${numeronmr} e um numero inteiro: ${Number.isInteger(numeronmr)}</p><br>`
window.document.body.innerHTML += `<p>E um NaN: ${(Number.isNaN(numeronmr))}</p><br>`
window.document.body.innerHTML += `<p>Se for arredondado para baixo ele vai ser:${Math.ceil(numeronmr)}</p><br>`
window.document.body.innerHTML += `<p>Se for arredondado para cima ele vai ser:${Math.floor(numeronmr)}</p><br>`
window.document.body.innerHTML += `<p>Seu numero com duas casas decimais sera:</p><br>`*/

const numero = Number(prompt('Digite o seu numero:'));

const numerotitulo = document.getElementById('numero-titulo');

const caixapergunta = document.getElementById('caixa-de-perguntas')

numerotitulo.innerHTML = numero;

caixapergunta.innerHTML += `<p>A raiz quadrada do seu numero e ${Math.pow(numero, 0.5)}.</p>`;
caixapergunta.innerHTML += `<p>${numero} e um numero inteiro? ${Number.isInteger(numero)}</p>`;
caixapergunta.innerHTML += `<p>E um NaN? ${Number.isNaN(numero)}</p>`;
caixapergunta.innerHTML += `<p>Seu numero arredondado para baixo: ${Math.floor(numero)}</p>`;
caixapergunta.innerHTML += `<p>Seu numero arredondado para cima: ${Math.ceil(numero)}</p>`;
caixapergunta.innerHTML += `<p>Seu numero com duas casas decimais: ${numero.toFixed(2)}</p>`;