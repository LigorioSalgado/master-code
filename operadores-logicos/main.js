// // La variable "semaforoActual" es igual a lo que escribe el usuario en el prompt
// var semaforoActual = prompt("En que color esta el semaforo")

// // alert(semaforoActual)
// if(semaforoActual === 'VERDE') {
//     alert('Avanza')
// } else if (semaforoActual === 'AMARILLO') {
//     alert('Acelerar')
// } else {
//     alert('Detente')
// }

var miEdad = prompt('Cuantos años tienes') // --> Sring

// Cambiar el tipo de dato de string a number
var miEdadNumber = parseInt(miEdad) // --> Castea a number

console.log(typeof miEdad)
console.log(typeof miEdadNumber)

if (miEdadNumber > 17) {
    alert('Ya puedes manejar 😎🚗')
} else {
    alert('Aun no eres mayor de edad 😢')
}
