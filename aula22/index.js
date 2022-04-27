/* 
If pode funcionar sozinho
Sempre que utilizo else, eu preciso de um if anteriormente
Else if sao ilimitados, possos ter quantos eu quiser
So posso ter um if e um else na checagem
Podemos usar condicoes sem else if, utilizando apenas if e else
*/ 

/* 
Entre 0 - 11 = Bom dia
Entre 12 - 17 = Boa tarde
Entre 18 e 23 = Boa noite
*/

const hora = 27;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if(hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Horario errado ai amigao')
}

const havemoney = false;

if (havemoney) {
    console.log('Vou sair de casa');
} else {
    console.log('Nao vou sair de casa');
}