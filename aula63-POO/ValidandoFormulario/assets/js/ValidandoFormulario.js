class ValidaFormulario {
    constructor () {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); 
    };

    eventos () {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkedFields(); 
        const validPassword = this.checkedPasswords();

        if(validFields && validPassword) {
            alert('Formulario enviado');
            this.formulario.submit();
        };
    };

    checkedPasswords() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'Campos senha e repetir senha devem ser iguais.');
            this.createError(repetirSenha, 'Campos senha e repetir senha devem ser iguais.');
        };

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
        };

        return valid
    };

    checkedFields() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        };

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if(!campo.value) {
                this.createError(campo, `O campo "${label}"nao pode estar vazio.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')) {
                if(!this.validUser(campo)) valid = false
            }

        };

        return valid;

    };

    validUser() {
        const user = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuario precisa ter entre 3 a 12 caracteres.');
            valid = false;
        };

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e numeros.');
            valid = false;
        };

        return true;
    };

    validaCPF (campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido.');
            return false;
        };

        return true;
    };

    createError(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    };
};

const valida = new ValidaFormulario();