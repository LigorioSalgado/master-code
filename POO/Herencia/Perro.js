const Mascota = require('./Mascota.js') // require palabra reservada de node


class Perro extends Mascota{

    constructor(nombre,edad,color,raza,tipo_orejas){
        super(nombre,edad,color,raza)//Vaz a ejecutar el cosntructor del padre
        this.tipo_orejas = tipo_orejas; 
    }

    ladra(){
      //console.log("Linea 13","Guau Guau 🐶" )

      return "Guau Guau 🐶" 
    }
}  

const snoopy = new Perro("Snoopy",5,"Blanco con Negro","Beagle","Orejas Caidas")
const scooby = new Perro("Scooby Doo",10,"Cafe con negro","Gran Danes","Orejas puntiagudas")

console.log("scooby", scooby)
console.log("snoopy", snoopy)

console.log(snoopy.comer("Pollo"));
console.log("Linea 23", snoopy.ladra())



// class Pug extends Perro{
//     constructor(nombre,edad,color,raza,tipo_orejas,tipo_cola){
//         super(nombre,edad,color,raza,tipo_orejas)
//     }
// }