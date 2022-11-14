function validar(formulario) {
    let valido = 's';
    let mensagem = '';

    if (formulario.user.value == '') {
        valido = 'n';
        mensagem = mensagem + "O campo Nome não pode está vazio";
    } else if (formulario.email.value == '') {
        valido = 'n';
        mensagem = mensagem + "O campo email não pode está vazio";
    } else if (formulario.psw.value == '') {
        valido = 'n';
        mensagem = mensagem + "O campo Senha não pode está vazio";
    }

    if (valido == 's') {
        formulario.submit();
    } else {
        alert(mensagem);
    }
}

function resp (nomeInp, cor) {
    if (cor == "red") {
        document.getElementById(nomeInp).style.border = "2px solid red";
    } else {
        document.getElementById(nomeInp).style.border = "2px solid green";
    }
}

// função validar nome
function validarNome() {
    let user = document.getElementById('user').value;
    let nomeValido = /^[a-z\d_]{4,15}$/i;

    if (formulario.user.value == nomeValido) {
        console.log ('nome válido');
    } else {
        console.log ('nome inválido');
    }
}

// função validar nome
function validarEmail() {
    let email = document.getElementById('email');
    let emailValido = /^[a-z0-9-]+(\.[a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[az]{2,3})$/

    if (formulario.email.value == emailValido) {
        console.log ('email válido');
    } else {
        console.log ('email inválido');
    }
}