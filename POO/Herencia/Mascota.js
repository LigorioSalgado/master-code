
class Mascota {

    constructor(nombre,edad,color,raza){
        this.nombre = nombre
        this.edad = edad 
        this.color = color
        this.raza =  raza
        this.patas = 4

    }

    comer(comida){
        //"La mascota" + this.nombre + " esta comiendo "+comida
        return  `La mascota ${this.nombre} esta comeindo ${comida}` // interpolacion ----> puedo meter variables dentro de strings
    }
}

module.exports = Mascota; // Esto significa que hago publica mi clase para otros archivos