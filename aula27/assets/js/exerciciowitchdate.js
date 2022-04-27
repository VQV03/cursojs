//Funçao para adicionar zero a esquerda
function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}
//Funcao para pegar o dia da semana
function getDayWeekTxt (diaSemana) {
    let diaSemanaText;
    switch (diaSemana){
    case 1:
        diaSemanaText = 'Domingo';
        break;
    case 2:
        diaSemanaText = 'Segunda-Feira';
        break;
    case 3:
        diaSemanaText = 'Terça-Feira';
        break;
    case 4:
        diaSemanaText = 'Quarta-Feira';
        break;
    case 5:
        diaSemanaText = 'Quinta-Feira';
        break;
    case 6:
        diaSemanaText = 'Sexta-Feira';
        break;
    case 7:
        diaSemanaText = 'Sabado';
        break;
    default:
        diaSemanaText = 'Invalido';
        break;
    }

    return diaSemanaText
}
//Funçao pra pegar o mes
function getMesTxt (mes) {
    let mesTxt
    switch (mes) {
        case 1:
        mesTxt = 'Janeiro';
        break;
    case 2:
        mesTxt = 'Fevereiro';
        break;
    case 3:
        mesTxt = 'Março';
        break;
    case 4:
        mesTxt = 'Abril';
        break;
    case 5:
        mesTxt = 'Maio';
        break;
    case 6:
        mesTxt = 'Junho';
        break;
    case 7:
        mesTxt = 'Julho';
        break;
    case 8:
        mesTxt = 'Agosto';
        break;
    case 9:
        mesTxt = 'Setembro';
        break;
    case 10:
        mesTxt = 'Outubro';
        break;
    case 11:
        mesTxt = 'Novembro';
        break;
    case 12:
        mesTxt = 'Dezembro';
        break;
    default:
        mesTxt = 'Invalido';
        break;
    
    }


return mesTxt
};
//Constantes
const data = new Date();
const diaSemana = data.getDay() + 1;//Domingo = 1, segunda = 2, ..., 7 = sabado
const mes = data.getMonth() + 1;
const mesTxt = getMesTxt(mes);
const diaSemanaText = getDayWeekTxt(diaSemana);
const diaMes = zeroEsquerda(data.getDate());
const ano = zeroEsquerda(data.getFullYear());
const horas = zeroEsquerda(data.getHours());
const minutos = zeroEsquerda(data.getMinutes());
//Teste
console.log(diaSemanaText, mesTxt, diaMes, ano, horas, minutos);
const mainContent = document.getElementById('main-content');
mainContent.innerHTML += `<p class="content">Hoje é ${diaSemanaText}, ${diaMes} de ${mesTxt} de ${ano} as ${horas}:${minutos}.</p>`