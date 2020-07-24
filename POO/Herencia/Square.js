const Rectangle = require('./Rectangle');

class Square extends Rectangle{

    constructor(width,heigth){
        super(width,heigth)
    }
}

const square1 = new Square(10,10);
console.log(square1.calculateArea())
const square2 = new Square(10,12);
console.log(square2.calculateArea())
