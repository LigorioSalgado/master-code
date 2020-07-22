
class Cliente{

    constructor(name,rfc,saldo){
        this.name = name
        this.rfc = rfc
        this.saldo = saldo
    }

    comprar(productos){

        var total = 0
        for(var i = 0; i <  productos.length; i++){
            total = total + productos[i].getPrice()
            //total+=productos[i].price
        }
        if(total <= this.saldo){
            for(var i = 0; i <  productos.length; i++){
              console.log("Compraste: "+productos[i].getName())
            }
        }else{
            console.log("Tas pobre :(")
        }

    }

    emitirFactura(){
        //Emite Factura
    }

    buyAndEmitBill(){ // Primero pague los productos y despues emita una factura
        //Esto rompe la S de SOLID esto hace mas de una cosa 
    }

}

class Producto {

    constructor(name,price,quantity,sku){
        this._name = name  //Si agrego un guin bajo es una señal que este atributo no se debe modificar
        this._price = price
        this._quantity = quantity
        this._sku = sku
    }

    //getters and setters

    getName(){
        return this._name;
    }

    getPrice(){
        return this._price
    }

    getQuantity(){
        return this._quantity
    }

    getSku(){
        return this._sku
    }

    setPrice(newPrice){
        this._price = newPrice
    }
    
}

var cliente = new Cliente("Edwin Salgado", "SAFL930610", 10000 )
var play = new Producto("Playstation 5",16500,1000,"91237124793214")
var nintendo = new Producto("Nintendo Switch",7500,200,"3625i8264")

console.log("Cliente: ", cliente.name)

const carrito1 = [play,nintendo]
cliente.comprar(carrito1)

// var carrito = [nintendo] //Un arreglo de objetos producto

// cliente.comprar(carrito)
// SOLID

// S -> single responsability

// O -> Open close principle ---> encapsulacion.
// Toda clase esta abierta para extencion pero cerrada para modificacion.
play.price = 10 //price ya no existe

nintendo.price = 500 ////price ya no existe

const carrito2 =  [play,nintendo]
cliente.comprar(carrito2)
//Estoy extendiendo al objeto y le agrego atributos
play.description = "Playstation 5 de 1 tb " //atributo
nintendo.description = "Nintendo Switch de 16 gb"
play.getDescription = function(){ //metodo
   return  this.description 
}

console.log(play)

console.log(nintendo)

//Esto no se debe hacer
//play._price = 1500

//Esto ai ae puede hacer
play.setPrice(17500) //Esto me da certesa de que este es el nuevo precio

console.log(play)

//carrito = 3 // esto marca un error solo con const

