

class Cuadrilatero {

    constructor(width, heigth){
        this.width = width;
        this.heigth = heigth;
    }

    setWidth(width){
        this.width = width;
    }

    setHeigth(heigth){
        this.heigth = heigth;
    }

    calculateArea(){
        return this.width * this.heigth
    }

}

module.exports = Cuadrilatero;