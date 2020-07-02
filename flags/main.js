(function(){
    "use strict"
    var banderas = document.querySelector('.flags')
    banderas.innerHTML = '' //esto va a borrar el contenido de flags

    console.log(datos)
    // [{...},{...},{...}] ----> arreglo de objetos
    console.log(datos[144])
    //1.- paso escoger tres paises de manera aleatoria
    //console.log(Math.floor(Math.random() * 250)) // 0 - 249
    //ceil ---> redondea hacia arriba
    //floor ----> redondea hacia abajo

    function obtenerPais(){
        var random = Math.floor(Math.random() * datos.length)
        console.log("Num pais:",random)
        return datos[random]
    }

    var paises = []

   
    for(var i=0; i < 3; i++){ // va a generar mis tres paises aleatorios
        var pais = obtenerPais()
        paises.push(pais)
    }

    // 3.- Escoger un pais el cual va a ser el correcto
    console.log(paises)
    var paisCorrecto = paises[ Math.floor(Math.random() * paises.length ) ]
    console.log(paisCorrecto)

    //4.- Borrar el Texto por default(Mexico) y poner el de mi pais correcto
    var textoPais = document.getElementById('country-name')
    textoPais.innerHTML = paisCorrecto.translations.es

    //6.- Borrar los datos por default en correcto, poblacion y capital
    var respuesta = document.getElementById('answer');
    var poblacion = document.getElementById('population');
    var capital = document.getElementById('capital');

    respuesta.innerHTML = ''
    poblacion.innerHTML = ''
    capital.innerHTML = ''

    //2. Mostrar los tres paises aleatorios 
    for(var i=0; i< paises.length; i++){ //Estoy recorreindo mi lista de pises random
        var img = document.createElement('img') //Crea una etiqueta img
        img.setAttribute('src',paises[i].flag) //Le agrega un atributo a la etiqueta
        img.setAttribute('id',paises[i].name)
        //5. agrego un listener a mis bandera para poder saber que bandera fue cliqueada
        img.addEventListener('click',function(evento){ //Va a agregar un listener a cada bandera de manera independiente
            //console.log(paises[i].name) //Asyncronicidad
            console.log(evento)
            console.log(evento.target)
            console.log(evento.target.id)
            if(paisCorrecto.name === evento.target.id){
                respuesta.innerHTML = "¡Correcto!"
                poblacion.innerHTML = "Poblacion: "+paisCorrecto.population
                capital.innerHTML = "Capital: "+paisCorrecto.capital
            }else{
                respuesta.innerHTML = "¡Incorrecto!"
            }
        })
        banderas.appendChild(img) //aqui le digo donde meterlas banderas
    }

})();