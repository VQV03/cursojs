const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body)
const bgColorBody = estiloBody.backgroundColor
console.log(bgColorBody);

for (let p of ps) {
    //p = tag <p>, styles = css, backgroundColor e color sao propriedades do css, bgColorBody e colorBody sao os valores
    p.style.backgroundColor = bgColorBody
    p.style.color = '#FFFFFF';
};