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

    console.log(paises)
    var paisCorrecto = paises[ Math.floor(Math.random() * paises.length ) ]
    console.log(paisCorrecto)


    for(var i=0; i< paises.length; i++){ //Estoy recorreindo mi lista de pises random
        var img = document.createElement('img') //Crea una etiqueta img
        img.setAttribute('src',paises[i].flag) //Le agrega un atributo a la etiqueta
        img.setAttribute('id',paises[i].name)
        banderas.appendChild(img) //aqui le digo donde meterlas banderas
    }

})();