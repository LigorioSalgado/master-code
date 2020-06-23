// La variable "semaforoActual" es igual a lo que escribe el usuario en el prompt
var semaforoActual = prompt("En que color esta el semaforo")

// alert(semaforoActual)
if(semaforoActual === 'VERDE') {
    alert('Avanza')
} else if (semaforoActual === 'AMARILLO') {
    alert('Acelerar')
} else {
    alert('Detente')
}
