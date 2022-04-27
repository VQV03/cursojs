
   const form = document.getElementById('form');

    const resultado = document.getElementById('resultado');
    let contador = 1;
    const pessoas = [];

    function recebe(){
        event.preventDefault();
        const name = document.querySelector('.name');
        const surname = document.querySelector('.surname');
        const heigth = document.querySelector('.heigth');
        const weigth = document.querySelector('.weigth');

        pessoas.push({
            name: name.value,
            surname: surname.value,
            heigth: heigth.value,
            weigth: weigth.value
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${name.value} ${surname.value}, ${heigth.value}, ${weigth.value}</p>`
    }

    //form.addEventListener('submit', recebe)


    /*function meu() {//seleciono com o query o nome da minha form ou class..
        const form = document.querySelector('.form');
        const resultado = document.querySelector('.resultado')
          let contador=1;
        const pessoas=[];//crio meu array para armazenar os dados que serão exibidos do input
        
      
         function recebe(evento){
             evento.preventDefault();
             const nome=document.querySelector('.nome')
             const sobrenome=document.querySelector('.surname')
             const peso=document.querySelector('.weigth')
             const altura=document.querySelector('.heigth')
      
             //objeto por indice
             pessoas.push({
               nome: nome.value,
               sobrenome: surname.value,
               altura: heigth.value,
               peso: weigth.value
             });
      
             console.log(pessoas)
      
             resultado.innerHTML+=`<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
             //pego o valor dos meus inputs
      
         }
         form.addEventListener('submit', recebe);
     }
     meu();*/