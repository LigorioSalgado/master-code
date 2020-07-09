(function() {
    'use strict'
    // Vicula la variable 'botonLogin' con el elemento que tenga el id='login-btn'
    var botonLogin = document.getElementById('login-btn')

    botonLogin.addEventListener('click', function() {
        // Se ejecuta cuando alguien hace click.

        // Hay que tomar lo que escribieron en email y password
        var email = document.getElementById('exampleInputEmail1');
        var password = document.getElementById('exampleInputPassword1');

        // Mis cuentas correctas --> CONSTANTES
        var EMAIL_SUCCESS = 'micorreo@gmail.com'
        var PASSWORD_SUCCESS = '123'

        // Validar si es correcto email & password
        if (email.value === EMAIL_SUCCESS) {
            if (password.value === PASSWORD_SUCCESS ) {
                // alert('Pus login')
                
                // Mandar a llamar al modal y activarlo
                var modal = document.getElementById('modal-login-success');
                // console.log(modal);
            } else {
                alert('Usuario existe pero la contraseña nel')
            }
        } else {
            alert('Email no encontrado')
        }
    })
})()

