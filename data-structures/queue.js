//Los metodos que tiene un queue
// enqueue ---> encolar
// dequeue ---> sacar de la fila
//length -----> tamaño de la fila
//isEmpty  -----> si la pila esta vacia
// front ----> es el primer elemento de la fila

class Queue {

    constructor(){
        this.collection = [] // esto es la fila
    }

    enqueue(item){ //Agrega un nuevo elemento a la
        this.collection.push(item);
    }

    dequeue(){
        return this.collection.shift() //siempre va a sacar el primero
    }

    length(){ //el numero de elementos en mi fila
        return this.collection.length
    }

    isEmpty(){
        return this.collection.length === 0
    }

    front(){
        return this.collection[0] //el primer elemento en la fila
    }
}

const filaDeTortillas = new Queue()
filaDeTortillas.enqueue("Edwin")
filaDeTortillas.enqueue("Raúl")
filaDeTortillas.enqueue("Mali")
filaDeTortillas.enqueue("Maui")
console.log("El primero en la fila", filaDeTortillas.front())
console.log("Atendiendo al cliente")
console.log(filaDeTortillas.dequeue())
console.log("El primero en la fila", filaDeTortillas.front())
console.log("Que dan por atender", filaDeTortillas.length())
console.log(filaDeTortillas.isEmpty())
console.log("Atendiendo al cliente")
filaDeTortillas.dequeue()
console.log("El primero en la fila", filaDeTortillas.front())






