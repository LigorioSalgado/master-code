const Cuadrilatero = require('./Cuadrilatero');

class Square extends Cuadrilatero{

    constructor(side){
        super(side,side)
    }

    setSide(newSide){
        this.setWidth(newSide)
        this.setHeigth(newSide)
    }

    getSide(){
        return this.width
        //return this.heigth
    }
}

const square1 = new Square(10);
console.log(square1.getSide())
console.log(square1.calculateArea())
square1.setSide(20)
console.log(square1.calculateArea())
const square2 = new Square(12);
console.log(square2.calculateArea())
