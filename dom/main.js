(function(){
    "use strict"

    var nombre = document.getElementById('nombre')//Voy a buscar por el id de una etiqueta
    console.log(nombre)
    var email = document.getElementById('email')
    console.log(email)
    var tel = document.getElementById('tel')
    console.log(tel)
    var tipo = document.getElementById('tipo')
    console.log(tipo)
    var guardar = document.getElementById('guardar') //Este es mi boton
    console.log(guardar)

    // function clickGuardar(){
    //     console.log("click desde la funcion con nombre")
    // }

    // guardar.addEventListener('click',clickGuardar)

    guardar.addEventListener('click',function(){ //funcion anonima
        console.log('Le di click')
        console.log('Nombre: '+nombre.value)
        console.log('Email: '+email.value)
        console.log('Telefono: '+tel.value)
        console.log('Tipo: '+tipo.value)

    })

})() //IIFE Immediatal Invoked Function Expressions 
// Proteje mis variables desde la consola del navegador