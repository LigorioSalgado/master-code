// function ejemploDeCb(cb) {
//     // Aqui se puede hacer el código que sea.
//     // ...
//     cb('String que regresa el CB')
// }


// ejemploDeCb((parametro) => {
//     console.log(parametro);
//     console.log(3+3);
// });

const operacion = (num1, num2, oppCB) => {
    oppCB(num1, num2)
}

const suma = (numero1, numero2) => {
    console.log(numero1 + numero2);
}

const resta = (numero1, numero2) => {
    console.log(numero1 - numero2);
}

operacion(5,9, suma)
operacion(9,5, resta)