var cont = 1

function entrar() {
    var senha = document.getElementById('senha').value;
    if (senha === 'jobson') {
        alert('bem vindo ');
    } else {
        cont = cont + 1;
        for (i = 5; i < cont; i++) {
            alert('tente mais tarde');
        }
    alert('senha incorreta')
    }
}
    
   