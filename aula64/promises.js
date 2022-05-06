function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}
 
function wait (msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    }); 
}

wait ('Conexao BD', random(1, 3))
.then(resposta => {
    //console.log(resposta);
    return wait('Buscando dados', random(1, 3));
})
.then(resposta => {
    //console.log(resposta)
    return wait('Tratando os dados', random(1, 3)); 
})
.then(resposta => {
    //console.log(resposta)
})
.then(() => {
    console.log('Retornando os dados.');
})
.catch(e => {
    console.log('ERRO:', e);
});

console.log('Isso sera exibido antes das promises, mesmo vindo depois')
