
console.log('Iniciando');

// Donde inicia mi for, cuando se va a detener, suma de i + 1
// for(var i = 1; i <= 10000; i++) {
//     if (i%2 === 0) {
//         console.log(i + ' es numero par');
//     }
// }


// CONTADORES
// Cuantos numeros del 1 al 10000 son pares
// var contador = 0
// for(var i = 1; i <= 10000; i++) {
//     if (i%2 === 0) {
//         contador = contador + 1
//     }
// }
// console.log('Hay ' + contador + ' número pares');


// ACUMULADORES
// Suma todos los números del 1 al 10 --> *55*
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

var acumlulador = 0;
for(var i = 1; i<11; i++) {
    acumlulador = acumlulador + i
}
console.log('La suma total de los números dl 1 al 100 es: ' + acumlulador);

console.log('Terminó');


// FIBONACCI
var secuencia = "";
for(var i = 0; i<100; i++){
    var a = 0, b = 1, f = 1;
    for(var j = 2; j <= i; j++) {
        f = a + b;
        a = b;
        b = f;
    }
    secuencia = secuencia + f + " "
}
console.log(secuencia);
