function timer () {

    function getTimeFromSeconds (segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
        })
    }

    const relogio = document.querySelector('.relogio')
    const inciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos)
        }, 1000);
    }

    inciar.addEventListener('click', function(inicio){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    });

    pausar.addEventListener('click', function(pausa){
        relogio.classList.add('pausado')
        clearInterval(timer);
    });

    zerar.addEventListener('click', function(reset){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = "00:00:00"
        segundos = 0
    });
};
timer();
/* //Outra forma de resolver
document.addEventListener('click', function(e) {
    const el = e.target
    if(el.classList.contains('zerar'){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = "00:00:00"
        segundos = 0
    }) 

    if(el.classList.contains('iniciar'){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }) 

    if(el.classList.contains('pausar'){
        relogio.classList.add('pausado')
        clearInterval(timer);
    })
})
*/