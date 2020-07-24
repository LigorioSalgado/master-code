const Cuadrilatero = require('./Cuadrilatero')

class Rectangle  extends Cuadrilatero{

    constructor(width, heigth){
       super(width,heigth)
    }

}

const rec1 = new Rectangle(9,12)
console.log(`El area del rectangulo es ${rec1.calculateArea()}`)

