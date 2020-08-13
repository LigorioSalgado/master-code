const miPrimerReguex = new RegExp('abc')
const miSegundoReguex = /abc/

const miString = 'abcdefgh'

// console.log(miPrimerReguex.test(miString));
// console.log(miSegundoReguex.test(miString));


// console.log(miString.replace(miSegundoReguex, 'ABC'));

// const texto = 'Hola mundo desde mi mundo';
// const miOtroReguex = /mundo/g
// console.log(texto.replace(miOtroReguex, 'TIERRA'));


// const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// console.log(re.test('mi_correo@devf.mx'));


// Busca al principio de la cadena de texto
// const re = /^ab/g
// const miOtroString = 'abcdeabfgh'
// console.log(miOtroString.replace(re, "AB"));

// Busca al final de la cadena de texto
const re = /ab$/
const miOtroString = 'abcdeabfghab'
console.log(miOtroString.replace(re, "AB"));