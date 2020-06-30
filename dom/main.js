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

    function validarForm(nombre,email,tel,tipo){
        // Si todos los campos estan completos esto regresara un true
        // en caso contrario regresara un false 
        if(nombre.value !== "" && email.value !== "" &&  tel.value !== "" && tipo.value !== "0" ){ // && ----> Y || ----> O
            return true
        }else{
            return false
        }

    }

    guardar.addEventListener('click',function(){ //funcion anonima
        console.log('Le di click')
        if (validarForm(nombre,email,tel,tipo)) {
            //aca agrego un nuevo row a la tabla
            var tabla = document.querySelector('.table');// Va abuscar un tag de html con la clase table
            //Queryselector es unselector flexible  busca como si estuvieramos en css
            console.log(tabla)
            var row = document.createElement('div') //va a creau una etiqueta div sencilla
            row.classList.add('row') //agrega una clase a mi elemento de html
            row.innerHTML = '<div class="column">'+ nombre.value +'</div>'
            + '<div class="column">'+ email.value +'</div>'
            + '<div class="column">'+ tel.value +'</div>'
            + '<div class="column">'+ tipo.value +'</div>'
            
            //Esto modifica el html que tiene adentro la etiqueta <div class="row"></div>
            console.log(row)

            tabla.appendChild(row) // agrega un hijo(nodo de html) a un padre en este caso otro nodo

        }else{
            alert('Favor de llenar todos los datos ')
        }
        console.log(validarForm(nombre,email,tel,tipo))
        console.log('Nombre: '+nombre.value)
        console.log('Email: '+email.value)
        console.log('Telefono: '+tel.value)
        console.log('Tipo: '+tipo.value)
    })

})() //IIFE Immediatal Invoked Function Expressions 
// Proteje mis variables desde la consola del navegador