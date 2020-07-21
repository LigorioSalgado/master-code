
class Cliente{

    constructor(name,rfc,saldo){
        this.name = name
        this.rfc = rfc
        this.saldo = saldo
    }

    comprar(productos){

        var total = 0
        for(var i = 0; i <  productos.length; i++){
            total = total + productos[i].price
            //total+=productos[i].price
        }
        if(total <= this.saldo){
            for(var i = 0; i <  productos.length; i++){
              console.log("Compraste: "+productos[i].name)
            }
        }else{
            console.log("Tas pobre :(")
        }

    }

    emitirFactura(){
        //Emite Factura
    }

}

class Producto {

    constructor(name,price,quantity,sku){
        this.name = name
        this.price = price
        this.quantity = quantity
        this.sku = sku
    }
}

var cliente = new Cliente("Edwin Salgado", "SAFL930610", 10000 )
var play = new Producto("Playstation 5",16500,1000,"91237124793214")
var nintendo = new Producto("Nintendo Switch",7500,200,"3625i8264")

console.log("Cliente: ", cliente.name)

var carrito = [nintendo] //Un arreglo de objetos producto

cliente.comprar(carrito)
