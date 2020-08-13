//charAt -->busca el caracter  en una posición especifica
const myString = "Hola Mundo bonito Mundo";
console.log("Caracter en la pocision 2: ",myString.charAt(2));

//indexOf ---> me va poner la posicion de una caracter en especifico

console.log("el indice de la A ---> ", myString.indexOf('o'))

//lastIndexof --> lo mismo que indexOf pero de derecha a izquierda

console.log("el indice de la A ---> ", myString.lastIndexOf('o'))

//split y Join
//split --> corta el string cuando encuentra el caracter
console.log("El split de mi string", myString.split(" "))
const palabras = ["Hola","Soy","Un","string"]
console.log("El join de mi arreglo", palabras.join(" "))

//replace

console.log("reemplazo mundo por todos: ",myString.replace("Mundo","a todos"))



