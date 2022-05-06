function random(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}
 
function wait (msg, tempo) {
    return new Promise ((resolve, reject) => {
        

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    }); 
}

async function executa() {
    try {
        const fase1 = await wait('Fase 1', 1000);
        console.log(fase1);

        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1)
        }, 1100)

        const fase2 = await wait('Fase 2', random());
        console.log(fase2);

        const fase3 = await wait('Fase 3', random());
        console.log(fase3);

        console.log('Terminamos na fase: 3')
    } catch (e) {
        console.log(e);
    }
}

executa ();

//pending -> pendente
//fullfilled -> resolvida
//reject -> rejeitada

//################################################################################

/*wait('Fase 1', random())
.then(valor => {
    console.log(valor);
    return wait('Fase 2', random())
})
.then(fase => {
    console.log(fase);
    return wait('Fase 3', random())
})
.then(fase => {
    console.log(fase)
    return fase
})
.then(fase => {
    console.log('Terminamos na fase:')
})
.catch( e => console.log(e));*/