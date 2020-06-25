// Declaración de mi función
// --> function es una palabra reservada
// --> El nombre de mi funcion ()
function miPrimeraFuncion() {
    console.log('Esta es mi primera funcion')
}

// Parametros - Argumentos
function sumaDeDosDigitos(numUno, numDos) {
    console.log(numUno + numDos);
}

// Ejecución de mi función
// miPrimeraFuncion()
var digitoUnoStr = prompt('Escribe el primer numero')
var digitoDosStr = prompt('Escribe el segundo numero')

var digitoUno = parseInt(digitoUnoStr)
var digitoDos = parseInt(digitoDosStr)

sumaDeDosDigitos(digitoUno, digitoDos)