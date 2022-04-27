function getDayWeekTxt (diaSemana) {
    let diaSemanaText;
    switch (diaSemana){
    case 1:
        diaSemanaText = 'Domingo';
        break;
    case 2:
        diaSemanaText = 'Segunda';
        break;
    case 3:
        diaSemanaText = 'Terca';
        break;
    case 4:
        diaSemanaText = 'Quarta';
        break;
    case 5:
        diaSemanaText = 'Quinta';
        break;
    case 6:
        diaSemanaText = 'Sexta';
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


const data = new Date();
const diaSemana = data.getDay() + 1;//Domingo = 1, segunda = 2, ..., 7 = sabado
const diaSemanaText = getDayWeekTxt(diaSemana);


/**/

/*if (diaSemana === 1) {
    diaSemanaText = 'Domingo'
} else if (diaSemana === 2) {
    diaSemanaText = 'Segunda'
} else if (diaSemana === 3) {
    diaSemanaText = 'Terca'
} else if (diaSemana === 4) {
    diaSemanaText = 'Quarta'
} else if (diaSemana === 5) {
    diaSemanaText = 'Quinta'
} else if (diaSemana === 6) {
    diaSemanaText = 'Sexta'
} else if (diaSemana === 7) {
    diaSemanaText = 'Sabado'
} else {
    diaSemanaText = 'A data esta invalida'
}*/

console.log(`Hoje e ${diaSemanaText}, o ${diaSemana}º dia da semana.`)