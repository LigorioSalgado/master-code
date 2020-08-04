//Los métodos que tiene un queue
// enqueue ---> encolar
// dequeue ---> sacar de la fila
//length -----> tamaño de la fila
//isEmpty  -----> si la pila esta vacía
// front ----> es el primer elemento de la fila

class Queue {
  constructor() {
    this.collection = []; // esto es la fila
  }

  enqueue(item) {
    //Agrega un nuevo elemento
    this.collection.push(item);
  }

  dequeue() {
    return this.collection.shift(); //siempre va a sacar el primero
  }

  length() {
    //el número de elementos en mi fila
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }

  front() {
    return this.collection[0]; //el primer elemento en la fila
  }
}

const filaDeTortillas = new Queue();
filaDeTortillas.enqueue("Edwin");
filaDeTortillas.enqueue("Raúl");
filaDeTortillas.enqueue("Mali");
filaDeTortillas.enqueue("Maui");
console.log("El primero en la fila", filaDeTortillas.front());
console.log("Atendiendo al cliente");
console.log(filaDeTortillas.dequeue());
console.log("El primero en la fila", filaDeTortillas.front());
console.log("Que dan por atender", filaDeTortillas.length());
console.log(filaDeTortillas.isEmpty());
console.log("Atendiendo al cliente");
filaDeTortillas.dequeue();
console.log("El primero en la fila", filaDeTortillas.front());

class Song {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  play() {
    return `Reproducioendo ${this.title}`;
  }
}

const myPlayList = new Queue(); //Esto es la playlist
const song1 = new Song("El triste", "2:30");
const song2 = new Song("La chona", "3:30");
const song3 = new Song("Cumbion chido", "2:30");

myPlayList.enqueue(song1);
myPlayList.enqueue(song2);
myPlayList.enqueue(song3);

setInterval(function () {
  //va a ejecutar esto cada tres segundos
  if (!myPlayList.isEmpty()) {
    console.log(myPlayList.dequeue().play());
  } else {
    console.log("se acabo la fiesta");
  }
}, 3000); //3000 milisegundos
