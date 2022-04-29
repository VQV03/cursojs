const nome = 'Vitor';

function falaNome () {
    //A funcao sabe onde ela foi criada e tem ciencia dos seus vizinhos
    const nome = 'Gerso' //Caso ja tenha a variavel dentro da funcao, ela ira dar preferencia a variavel dentro dele mesmo e nao a vizinha
    console.log(nome)
} 

function usaFalaNome () {
    const nome = 'Gersin' //Porem aqui ela ainda dara preferencia a variavel dentro da funcao falaNome
    falaNome()
}
usaFalaNome();