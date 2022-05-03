//Funcoes recursivas sao funcoes que se chamam, criando uma "estrutura de repeticao"

function recursiva (max) {
    if (max >= 10) return;
    max++
    console.log(max);
    recursiva(max);
}

recursiva(0);