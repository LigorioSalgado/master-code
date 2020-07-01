(function(){
    "use strict"

    var listaFrutas = ["Mango","Manzana", "Pera", "Durazno","Fresa","Sandia"] // Esto un arrrglo ---> una lista de cosas 

    // var listaDeSuper = [ "Huevo", "Leche", "Papel Higiénico", "Carne", "Verduras" ]

    // var listadeNumeros = [1,2,3,4,5,6,7,8]

    // var listaVaridaita = [1,true,null,"hola", [], 3.8, undefined,function(){}]

    // var playlist = ["La incondicional", "La llorona", "El Triste"] //explicita

    // var playlist2 = new Array('Cumbia chida', '17 años', 'como la flor') //formal
    
    console.log("Numero de frutas: "+ listaFrutas.length) //length me dice el tamño de mi lista
    console.log("Elegi la fruta: ", listaFrutas[1] )//vas a buscar la fruta en la posicion 1
    console.log("Esta es ", listaFrutas[4])
    listaFrutas.push('Guayaba') //Va agregagr una nueva fruta al final de la lista
    console.log("Nueva Lista",listaFrutas)
    listaFrutas[1] = "Toronja"
    console.log(listaFrutas)
    listaFrutas.splice(0,0,"Higo") // 1 -->  donde empiezo, 0 --> cuantos borro, "higo" ---> que meto al arreglo
    console.log(listaFrutas)
    //Objetos 
    
    

    var sensei = { //Objeto que describe a un sensei
        nombre:"Raul Dagorik",
        edad: 26,
        aniosExp: 5,
        habilidades:["Briago","Chido", "Bailarin"] 
    }

    var alumno = {
        nombre:"Mario",
        edad:25,
        cinta:"Master",
        ciudad:"Cancun",
        estudios: {
            universidad:"UNAM",
            prepa:"Bachillerato"
        }
    }

    console.log("El nombre del sensei es: " + sensei.nombre)
    console.log("La edad del sensei es: " + sensei.edad)
    console.log("El nombre de alumno es: " + alumno.nombre)
    console.log("El trabajo de alumno es: " + alumno.trabajo)
    alumno.trabajo = "Web ninja developer";
    console.log("El trabajo de alumno es: " + alumno.trabajo)
    console.log(alumno)
    console.log(sensei.habilidades[2])
    console.log("La universidad del alumno "+alumno.estudios.universidad)

    var cancion1 = {
        titulo:"El triste",
        autor:"Roberto Cantoral",
        duracion: 3
    }

    var cancion2 = {
        titulo: "Como la Flor",
        autor:"Selena Quintanilla",
        duracion: 2.5
    }


    var playlist = [cancion1,cancion2] //Arreglo de objetos

    console.log("Reproduciendo: "+playlist[0].titulo)



})()//IIFE