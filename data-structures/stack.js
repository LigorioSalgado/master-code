// const myPila = [] //Esto ya es una pila, es una pila vacia

//Voy a apilar libros

// myPila.push("El quijote de la mancha")
// myPila.push("El principito")
// console.log("myPila", myPila)
// myPila.pop()
// console.log("myPila", myPila)

// const word = "arriba la birra" // Quiero comprobar si es un palíndromo
// var revert_word = ""; //esta me va a servir para convertir al palíndromo
// const letters =  [] //mi pila de letras
// const espacios = []
// word[0] //a
// word[6] // espacio
// for(var i=0; i < word.length; i++){
//     if(word[i] != " " ){
//         letters.push(word[i]);
//     }else{
//         espacios.push(i)
//         console.log("espacios", espacios)
//     }
// }
// // console.log("letters",letters.length)
// // console.log("espacios", espacios)

// for(var i=0; i < word.length;i++){
//     if(word[i] != " " && espacios.indexOf(i) == -1  ){
//         revert_word = revert_word + letters.pop() //está concatenando letras
//     }else{
//         revert_word = revert_word + " ";
//     }
// }
// console.log("revert_word", revert_word)

// if(word == revert_word){
//     console.log(`${word} es un palíndromo`)
// }else{
//     console.log(`${word} no es un palíndromo`)
// }

// console.log(typeof(myPila))

class Stack {
  //va a tener dos métodos: push y pop
  //peek ---> me dice el último elemento en la pila
  //length ----> me dice el tamaño de la pila
  constructor() {
    this.count = 0; // aquí voy a guardar cuantos elementos tengo en la pilla
    this.storage = {}; // aquí voy a guardar los elementos de mi pila
  }

  push(nuevoElemento) {
    //Mete cosas nuevas a mi pila
    //{'0':2,'1':3,'2':7}
    //deja la pila
    //this.storage = {}
    this.storage[this.count] = nuevoElemento; //agrega un elemento a una pocisión
    console.log("Stack -> push -> storage", this.storage);

    this.count++;
    console.log("Stack -> push -> count", this.count);
    console.log("Haciendo push");
  }

  pop() {
    if (this.count == 0) {
      return null;
    } // checa si la pila esta vacía

    //this.count ----- >  3
    console.log("Antes de haccer el pop");
    console.log("Stack -> pop -> storage", this.storage);
    console.log("Stack -> pop -> count", this.count);

    this.count--; //quito uno a count
    var result = this.storage[this.count]; //va aguardar el ultimo elemento en mi pila
    delete this.storage[this.count]; //se borra el último elemento
    console.log("Despues de haccer el pop");
    console.log("Stack -> pop -> storage", this.storage);
    console.log("Stack -> pop -> count", this.count);
    return result; //regreso el último elemento
  }

  length() {
    return this.count;
  }
  //Regresa el último valor en la pila, mas no lo elimina
  peek() {
    console.log("Estoy en peek");
    return this.storage[this.count - 1];
  }
}

const myNuevaPila = new Stack();

myNuevaPila.push(2);
myNuevaPila.push(3);
myNuevaPila.push(7);
console.log(myNuevaPila);
console.log(myNuevaPila.peek());
console.log(myNuevaPila.pop());
console.log(myNuevaPila);
myNuevaPila.push(9);
console.log(myNuevaPila);
