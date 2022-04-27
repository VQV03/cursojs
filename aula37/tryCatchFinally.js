/*try {
    //E executada quando nao ha erros
} catch (e) {
    //E executado quando ha erros
} finally {
    //Sera executado sempre
}*/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false
    });
}
try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora);
} catch (e) {
    //Tratar erro
} finally {
    console.log('tenha um bom dia')
}
