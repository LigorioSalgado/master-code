class Rectangle {

    constructor(width, heigth){
        this.width = width
        this.heigth = heigth
    }

    calculateArea(){
        this.area = this.width * this.heigth
        return `El area del  rectangulo es: ${this.area}`
    }

}

const rec1 = new Rectangle(10,12)
console.log(rec1.calculateArea())

module.exports = Rectangle;