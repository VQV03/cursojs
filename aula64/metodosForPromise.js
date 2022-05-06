function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
};
 
function wait (msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Cai no erro')
            return
        };
        
        setTimeout(() => {
            resolve(msg.toUpperCase()+ ' - Passei na Promise');
            return
        }, tempo);
    }); 
};

// Promise.all: O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.
// Promise.race: O método Promise.race(iterable) retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise.
// Promise.resolve: O método Promise.resolve(value) retorna um objeto Promise que é resolvido com o valor passado. Se o valor for thenable (ex: tiver um método "then"), a promise retornada irá "seguir" esse thenable, adotando seu estado final; se o valor for uma promise, o objeto será o resultado da chamada Promise.resolve; do contrário a promise será realizada com o valor.
// Promise.reject: O método Promise.reject(motivo) retorna um objeto Promise que é rejeitada com um dado motivo.

const promises = [
    'Primeiro valor',
    wait('Promise 1', random(0.5, 1)),
    wait('Promise 2', random(1, 1.5)),
    wait('Promise 3', random(1.5, 2)),
    'Outro valor'
];

Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(erro => {
    console.log(erro)
})

function dowloadPage() {
    const inCache = true;

    if(inCache) {
        return Promise.resolve('Pagina in cache')
    } else {
        return wait('Baixei a pagina', random(2, 4))
    }
}

dowloadPage()
.then(pageData => {
    console.log(pageData)
})
.catch(e => console.log('ERRO', e))
