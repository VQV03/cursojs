const nome = prompt('Digite seu nome completo!');
console.log(typeof nome)
window.document.body.innerHTML += `O seu nome é:<strong>${nome}</strong><br />`
window.document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras<br />`
window.document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`
window.document.body.innerHTML += `A primeira letra do seu nome é: <strong>${nome[0]}</strong><br />`
window.document.body.innerHTML += `A ultima letra do seu nome é: <strong>${nome.slice(nome.length -1)}</strong><br />`
window.document.body.innerHTML += `As ultimas tres letras do seu nome são: <strong>${nome.slice(nome.length -3)}</strong><br />`
window.document.body.innerHTML += `O indece da primeira letra A do seu nome:<strong>${nome.indexOf('a')}</strong>`
window.document.body.innerHTML += `O indece da ultima letra A do seu nome:<strong>${nome.lastIndexOf('a')}</strong>`
window.document.body.innerHTML += `As palavras que compoem seu nome são: <strong>${nome.split(' ')}</strong><br />`
window.document.body.innerHTML += `Seu nome em caixa-alta: <strong>${nome.toUpperCase()}</strong><br />`
window.document.body.innerHTML += `Seu nome em caixa-baixa: <strong>${nome.toLowerCase()}</strong><br />`