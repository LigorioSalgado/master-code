const myPila = [] //Esto ya es una pila , es una pila vacia

//Voy a pilar libros

myPila.push("El quijote de la mancha")
myPila.push("El principito")
console.log("myPila", myPila)
myPila.pop()
console.log("myPila", myPila)

const word = "arriba la birra" // Quiero comprobar si es un palindromo
var revert_word = ""; //esta me va a servir para convertir al palindromo
const letters =  [] //mi pila de letras
const espacios = []
word[0] //a 
word[6] // espacio
for(var i=0; i < word.length; i++){
    if(word[i] != " " ){
        letters.push(word[i]);
    }else{
        espacios.push(i)
        console.log("espacios", espacios)
    }
}
console.log("letters",letters.length)
console.log("espacios", espacios)

for(var i=0; i < word.length;i++){
    if(word[i] != " " && espacios.indexOf(i) == -1  ){
        revert_word = revert_word + letters.pop() //esta concatenando letras
    }else{
        revert_word = revert_word + " ";
    }
}
console.log("revert_word", revert_word)

if(word == revert_word){
    console.log(`${word} es un palindromo`)
}else{
    console.log(`${word} no es un palindromo`)
}

console.log(typeof(myPila))

class Stack{

    //va a tener dos metodos push y pop
    //peek ---> me dice el ultimo elemento en la pila
    //length ----> me dice el tamaño de la pila
    constructor(){
        this.count = 0 // aqui voy a guardar cuantos elementos tengo en la pilla
        this.storage = {} // aqui voy a guardar los elementos de mi pila
    }

    push(nuevoElemento){ //Mete cosas nuevas a  mi pila
        //{0:"x",1:"y",2:"z"}
        this.storage[this.count] = nuevoElemento; //agrega un elemento a una pocision
        this.count++;
    }

}




