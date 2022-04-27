//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
/*const treshoras = 60 * 60 * 3 * 1000;
const umdia = 60 * 60 * 24 * 1000;
const data = new Date(0 + treshoras + umdia); // 01/01/1970 Timestamp unix ou epoca unix*/
/*const date = new Date(2019, 3, 20, 15, 14, 27, 500) // ano, mes, dia, hora, minuto, segundos, milesimos de segundo
//Janeiro = 0, Fevereiro = 1, ...*/
/*const date = new Date('2019-04-20 20:20:59');
console.log('Dia', date.getDate())
console.log('Mes', date.getMonth() +1) //Meses no js comeca do 0
console.log('Ano', date.getFullYear())
console.log('Hora', date.getHours())
console.log('Min', date.getMinutes())
console.log('Seg', date.getSeconds())
console.log('Ms', date.getMilliseconds())
console.log('Dia semana', date.getDay()) // 0 = Domingo, 1 = Segunda, 2 = terca, ..., 6 = sabado
console.log(date.toString());
console.log(Date.now()); //Do Timestamp unix ate o momento atual*/

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}.`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
