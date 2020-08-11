// Areglos
let miArray = ['Amarillo', 'Rojo', 'Azul']
const miArrayDos = ['Negro', 'Blanco', ...miArray]

const arr = [1,2,3]
const arrDos = ['uno', 'dos', 'tres']
const arrFusion = [...arrDos, ...arr]
// console.log(arrFusion);


// Objetos
const myObj = {
    id: 4,
    name: 'Charmander',
    type: 'Fuego',
}

const complementoObj = {
    attack: 'Mordisco'
}

const miNuevoPokemon = {
    ...myObj,
    ...complementoObj
}

console.log(miNuevoPokemon);