function criaCalculadora() {
    return {
      display: document.querySelector('.display'),
  
      inicia() {
        this.clickCapture();
        this.pressBackSpace();
        this.pressEnter();
      },
  
    pressBackSpace() {
        this.display.addEventListener('keydown', e => {
          if (e.keyCode === 8) {
            e.preventDefault();
            this.clearDisplay();
          }
        });
    },
  
    pressEnter() {
        this.display.addEventListener('keyup', e => {
          if (e.keyCode === 13) {
            this.makeCount();
          }
        });
    },
      
    clearDisplay() {
        this.display.value = '';
    },
  
    deleteOne() {
        this.display.value = this.display.value.slice(0, -1);
    },
  
    makeCount() {
        //Funcao perigosa, pois pode trazer falhas de seguranca
        let conta = this.display.value;
  
        try {
          conta = eval(conta);
  
          if(!conta) {
            alert('Conta inválida');
            return;
          }
  
          this.display.value = String(conta);
        } catch(e) {
          alert('Conta inválida');
          return;
        }
      },
  
    clickCapture() {
        //Arrow function n alteram o comportamento do this
        //this -> calculadora
        document.addEventListener('click', e => {
          const el = e.target;
  
          if(el.classList.contains('btn-num')) {
            this.btnForDisplay(el.innerText);
          }
  
          if(el.classList.contains('btn-clear')) {
            this.clearDisplay();
          }
  
          if(el.classList.contains('btn-del')) {
            this.deleteOne();
          }
  
          if(el.classList.contains('btn-eq')) {
            this.makeCount();
          }
  
          this.display.focus();
        });
        //Forma 2
        /*document.addEventListener('click', function(e) {
                  const el = e.target;
  
                  if(el.classList.contains('btn-num')) {
                      this.btnParaDisplay(el.innerText);
                  };
              }.bind(this));*/
              //.bind esta ligando o this da clickCapture ao this da function inicia
    },
  
    btnForDisplay(valor) {
        this.display.value += valor;
    }
  
    };
  }
  
  const calculadora = criaCalculadora();
  calculadora.inicia();