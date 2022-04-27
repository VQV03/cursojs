//Operacao ternaria
const pontuacaoUsuario = 999;
                          // (condicao) ? 'Valor para verdadeiro' : 'Valor para falso' :
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);

//Setar um valor padrao para alguma variavel:
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

/*if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP')
} else {
    console.log('Usuario Normal')
}*/