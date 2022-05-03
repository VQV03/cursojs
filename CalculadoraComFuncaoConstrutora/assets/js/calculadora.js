function Calculadora() {
    this.display = document.querySelector('.display');
  
    this.start = () => {
      this.clickCapture();
      this.pressEnter();
    };
  
    this.pressEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.makeCount();
        }
      });
    };
  
    this.clickCapture = () => {
      document.addEventListener('click', event => {
        const el = event.target;
        if (el.classList.contains('btn-num')) this.addNumberDisplay(el);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-del')) this.delete();
        if (el.classList.contains('btn-eq')) this.makeCount();
      });
    };
  
    this.makeCount = () => {
      try {
        const count = eval(this.display.value);
  
        if(!count) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = count;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };
  
    this.addNumberDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    };
  
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
  }
  
  const calculadora = new Calculadora();
  calculadora.start();
  
